// Interactive code editor functionality

class CodeEditor {
    constructor() {
        this.editor = document.getElementById('code-editor');
        this.output = document.getElementById('code-output');
        this.runButton = document.getElementById('run-code');
        this.resetButton = document.getElementById('reset-code');
        
        this.originalCode = '';
        this.consoleMessages = [];
        
        // Check if elements exist before initializing
        if (this.editor && this.output && this.runButton && this.resetButton) {
            this.init();
        } else {
            console.error('Code editor elements not found');
        }
    }
    
    init() {
        // Set up event listeners
        this.runButton.addEventListener('click', () => this.runCode());
        this.resetButton.addEventListener('click', () => this.resetCode());
        
        // Tab key handling in editor
        this.editor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                
                // Insert 2 spaces at cursor position
                const start = this.editor.selectionStart;
                const end = this.editor.selectionEnd;
                
                this.editor.value = this.editor.value.substring(0, start) + '  ' + 
                                    this.editor.value.substring(end);
                
                // Move cursor after inserted spaces
                this.editor.selectionStart = this.editor.selectionEnd = start + 2;
            }
        });
        
        // Initialize with welcome message
        this.setCode('console.log("Welcome to the JavaScript editor!");');
        
        console.log('Code editor initialized successfully');
    }
    
    setCode(code) {
        this.originalCode = code;
        if (this.editor) {
            this.editor.value = code;
        }
    }
    
    resetCode() {
        if (this.editor) {
            this.editor.value = this.originalCode;
        }
        this.clearOutput();
    }
    
    clearOutput() {
        this.consoleMessages = [];
        if (this.output) {
            this.output.innerHTML = '';
        }
    }
    
    runCode() {
        if (!this.editor || !this.output) {
            console.error('Editor elements not available');
            return;
        }
        
        // Clear previous output
        this.consoleMessages = [];
        this.output.innerHTML = '';
        
        // Get the code to execute
        const code = this.editor.value.trim();
        
        if (!code) {
            this.output.innerHTML = '<span class="empty-output">No code to execute</span>';
            return;
        }
        
        // Save the original console methods
        const originalConsole = {
            log: console.log.bind(console),
            warn: console.warn.bind(console),
            error: console.error.bind(console),
            info: console.info.bind(console)
        };
        
        // Create custom console methods that capture output
        const captureOutput = (type) => {
            return (...args) => {
                const formattedArgs = args.map(arg => this.formatOutput(arg));
                this.consoleMessages.push({
                    type: type,
                    content: formattedArgs.join(' ')
                });
                // Also call the original method
                originalConsole[type](...args);
            };
        };
        
        // Replace console methods
        console.log = captureOutput('log');
        console.warn = captureOutput('warn');
        console.error = captureOutput('error');
        console.info = captureOutput('info');
        
        try {
            // Execute the code
            const result = eval(code);
            
            // If there's a return value and no console output, show it
            if (result !== undefined && this.consoleMessages.length === 0) {
                this.consoleMessages.push({
                    type: 'log',
                    content: this.formatOutput(result)
                });
            }
            
        } catch (error) {
            // Show errors in the output
            this.consoleMessages.push({
                type: 'error',
                content: `Error: ${error.message}`
            });
        } finally {
            // Always restore the original console methods
            console.log = originalConsole.log;
            console.warn = originalConsole.warn;
            console.error = originalConsole.error;
            console.info = originalConsole.info;
            
            // Display the captured output
            this.displayConsoleOutput();
        }
    }
    
    formatOutput(value) {
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (typeof value === 'string') return value;
        if (typeof value === 'number' || typeof value === 'boolean') return String(value);
        if (typeof value === 'function') return value.toString();
        if (typeof value === 'object') {
            try {
                return JSON.stringify(value, null, 2);
            } catch (e) {
                return String(value);
            }
        }
        return String(value);
    }
    
    displayConsoleOutput() {
        if (!this.output) return;
        
        if (this.consoleMessages.length === 0) {
            this.output.innerHTML = '<span class="empty-output">Code executed (no output)</span>';
            return;
        }
        
        const outputHTML = this.consoleMessages.map(message => {
            const typeClass = `console-${message.type}`;
            return `<div class="${typeClass}">${this.escapeHtml(message.content)}</div>`;
        }).join('');
        
        this.output.innerHTML = outputHTML;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the editor when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure all DOM elements are ready
    setTimeout(() => {
        window.codeEditor = new CodeEditor();
    }, 100);
});
