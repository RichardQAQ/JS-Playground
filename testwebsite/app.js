// Main application logic for the JavaScript Learning Portal

class LearningPortal {
    constructor() {
        // DOM elements
        this.lessonContainer = document.getElementById('lesson-container');
        this.lessonList = document.getElementById('lesson-list');
        this.prevButton = document.getElementById('prev-lesson');
        this.nextButton = document.getElementById('next-lesson');
        this.markCompleteButton = document.getElementById('mark-complete');
        this.progressIndicator = document.getElementById('progress-indicator');
        this.progressText = document.getElementById('progress-text');
        this.themeToggle = document.getElementById('theme-toggle');
        
        // App state
        this.lessons = window.appLessons || [];
        this.currentLessonIndex = 0;
        this.completedLessons = this.loadCompletedLessons();
        
        // Add interactive handler
        this.interactiveHandler = new InteractiveHandler();
        
        // Initialize app
        this.init();
    }
    
    init() {
        // Check if lessons are loaded
        if (this.lessons.length === 0) {
            this.lessonContainer.innerHTML = '<h2>No lessons found</h2><p>Please make sure lessons.js is loaded properly.</p>';
            return;
        }
        
        // Build lesson navigation
        this.buildLessonNav();
        
        // Load first lesson
        this.loadLesson(0);
        
        // Set up event listeners
        this.prevButton.addEventListener('click', () => this.navigateLesson(-1));
        this.nextButton.addEventListener('click', () => this.navigateLesson(1));
        this.markCompleteButton.addEventListener('click', () => this.markLessonComplete());
        
        // Theme toggle
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Initialize with saved theme preference
        this.initializeTheme();
        
        // Update progress indicator
        this.updateProgress();
    }
    
    buildLessonNav() {
        this.lessonList.innerHTML = '';
        
        this.lessons.forEach((lesson, index) => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = lesson.title;
            link.setAttribute('data-index', index);
            
            // Check if lesson is completed
            if (lesson.id && this.completedLessons.includes(lesson.id)) {
                link.classList.add('completed');
            }
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadLesson(index);
            });
            
            listItem.appendChild(link);
            this.lessonList.appendChild(listItem);
        });
        
        console.log(`Built navigation for ${this.lessons.length} lessons`);
    }
    
    loadLesson(index) {
        if (index < 0 || index >= this.lessons.length) return;
        
        this.currentLessonIndex = index;
        const lesson = this.lessons[index];
        
        // Update content
        this.lessonContainer.innerHTML = lesson.content;
        
        // Initialize interactive elements after content is loaded
        setTimeout(() => {
            this.interactiveHandler.initializeInteractives();
        }, 100);
        
        // Load code example - ensure editor is ready
        setTimeout(() => {
            if (window.codeEditor && lesson.initialCode) {
                window.codeEditor.setCode(lesson.initialCode);
            }
        }, 200);
        
        // Update navigation buttons
        this.prevButton.disabled = index === 0;
        this.nextButton.disabled = index === this.lessons.length - 1;
        
        // Update completion state
        this.updateCompletionState();
        
        // Update active lesson in navigation
        this.updateActiveLesson();
        
        // If there are any code blocks, apply syntax highlighting
        if (window.hljs) {
            setTimeout(() => {
                document.querySelectorAll('pre code').forEach((block) => {
                    hljs.highlightElement(block);
                });
            }, 100);
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
    
    navigateLesson(direction) {
        const newIndex = this.currentLessonIndex + direction;
        if (newIndex >= 0 && newIndex < this.lessons.length) {
            this.loadLesson(newIndex);
        }
    }
    
    markLessonComplete() {
        const currentLesson = this.lessons[this.currentLessonIndex];
        
        if (!this.completedLessons.includes(currentLesson.id)) {
            this.completedLessons.push(currentLesson.id);
            this.saveCompletedLessons();
            this.updateCompletionState();
            this.updateActiveLesson();
            this.updateProgress();
        }
        
        // If there's a next lesson, automatically navigate to it
        if (this.currentLessonIndex < this.lessons.length - 1) {
            this.navigateLesson(1);
        }
    }
    
    updateCompletionState() {
        const currentLesson = this.lessons[this.currentLessonIndex];
        const isCompleted = this.completedLessons.includes(currentLesson.id);
        
        this.markCompleteButton.textContent = isCompleted ? 'Completed ✓' : 'Mark as Complete';
        this.markCompleteButton.disabled = isCompleted;
    }
    
    updateActiveLesson() {
        // Remove active class from all lessons
        document.querySelectorAll('#lesson-list a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current lesson
        const activeLink = document.querySelector(`#lesson-list a[data-index="${this.currentLessonIndex}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    updateProgress() {
        const totalLessons = this.lessons.length;
        const completedCount = this.completedLessons.length;
        const progressPercentage = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);
        
        this.progressIndicator.style.width = `${progressPercentage}%`;
        this.progressText.textContent = `${progressPercentage}% Complete`;
    }
    
    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDarkTheme = document.body.classList.contains('dark-theme');
        this.themeToggle.textContent = isDarkTheme ? '☀️' : '🌙';
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }
    
    initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            this.themeToggle.textContent = '☀️';
        } else {
            this.themeToggle.textContent = '🌙';
        }
    }
    
    loadCompletedLessons() {
        const saved = localStorage.getItem('completedLessons');
        return saved ? JSON.parse(saved) : [];
    }
    
    saveCompletedLessons() {
        localStorage.setItem('completedLessons', JSON.stringify(this.completedLessons));
    }
}

// New class to handle interactive elements within lessons
class InteractiveHandler {
    constructor() {
        this.interactives = new Map();
    }
    
    initializeInteractives() {
        // Find all interactive elements in the current lesson
        const interactiveElements = document.querySelectorAll('.interactive-element');
        
        interactiveElements.forEach((element, index) => {
            this.setupInteractiveElement(element, index);
        });
    }
    
    setupInteractiveElement(element, index) {
        // Find buttons within the interactive element
        const buttons = element.querySelectorAll('button[data-action]');
        const outputDiv = element.querySelector('.output') || this.createOutputDiv(element);
        
        buttons.forEach(button => {
            const action = button.getAttribute('data-action');
            
            // Remove existing listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Add new listener
            newButton.addEventListener('click', () => {
                this.executeAction(action, outputDiv, newButton);
            });
        });
    }
    
    createOutputDiv(element) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'interactive-output';
        element.appendChild(outputDiv);
        return outputDiv;
    }
    
    executeAction(action, outputDiv, button) {
        try {
            switch(action) {
                case 'show-alert':
                    alert('Hello from JavaScript!');
                    outputDiv.innerHTML = '<strong>Result:</strong> Alert dialog shown!';
                    break;
                    
                case 'show-date':
                    const now = new Date();
                    outputDiv.innerHTML = `<strong>Current date and time:</strong><br>${now.toLocaleString()}`;
                    break;
                    
                case 'calculate-sum':
                    const num1 = Math.floor(Math.random() * 10) + 1;
                    const num2 = Math.floor(Math.random() * 10) + 1;
                    const sum = num1 + num2;
                    outputDiv.innerHTML = `<strong>Random calculation:</strong><br>${num1} + ${num2} = ${sum}`;
                    break;
                    
                case 'toggle-text':
                    if (outputDiv.innerHTML.includes('Text toggled!')) {
                        outputDiv.innerHTML = '<strong>Original text</strong>';
                        button.textContent = 'Toggle Text';
                    } else {
                        outputDiv.innerHTML = '<strong style="color: var(--accent-color);">Text toggled!</strong>';
                        button.textContent = 'Reset Text';
                    }
                    break;
                    
                case 'change-background':
                    const colors = ['#ffebee', '#e8f5e8', '#e3f2fd', '#fff3e0', '#f3e5f5'];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    outputDiv.style.backgroundColor = randomColor;
                    outputDiv.innerHTML = `<strong>Background changed!</strong><br>New color: ${randomColor}`;
                    break;
                    
                case 'show-random':
                    const randomNum = Math.floor(Math.random() * 100) + 1;
                    outputDiv.innerHTML = `<strong>Random number:</strong> ${randomNum}`;
                    break;
                    
                case 'count-clicks':
                    const currentCount = parseInt(button.getAttribute('data-count') || '0');
                    const newCount = currentCount + 1;
                    button.setAttribute('data-count', newCount);
                    outputDiv.innerHTML = `<strong>Button clicked ${newCount} time(s)</strong>`;
                    break;
                    
                case 'show-input':
                    const userInput = prompt('Enter your name:');
                    if (userInput) {
                        outputDiv.innerHTML = `<strong>Hello, ${userInput}!</strong>`;
                    } else {
                        outputDiv.innerHTML = '<strong>No input provided</strong>';
                    }
                    break;
                    
                case 'custom-code':
                    // Execute custom code from data-code attribute
                    const customCode = button.getAttribute('data-code');
                    if (customCode) {
                        this.executeCustomCode(customCode, outputDiv);
                    }
                    break;
                    
                default:
                    outputDiv.innerHTML = `<strong>Unknown action:</strong> ${action}`;
            }
        } catch (error) {
            outputDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
            outputDiv.style.color = '#d32f2f';
        }
    }
    
    executeCustomCode(code, outputDiv) {
        const output = [];
        
        // Override console.log to capture output
        const originalLog = console.log;
        console.log = (...args) => {
            output.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
            ).join(' '));
            originalLog.apply(console, args);
        };
        
        try {
            // Execute the custom code
            eval(code);
            
            if (output.length > 0) {
                outputDiv.innerHTML = `<strong>Output:</strong><br><pre>${output.join('\n')}</pre>`;
            } else {
                outputDiv.innerHTML = '<strong>Code executed successfully (no output)</strong>';
            }
        } catch (error) {
            outputDiv.innerHTML = `<strong>Error:</strong> ${error.message}`;
            outputDiv.style.color = '#d32f2f';
        } finally {
            console.log = originalLog;
        }
    }
}

// Initialize the app when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LearningPortal();
});
