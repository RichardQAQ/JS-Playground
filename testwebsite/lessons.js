// Lesson data for the JavaScript Learning Portal

window.appLessons = [
    {
        id: 'intro-javascript',
        title: 'Introduction to JavaScript',
        content: `
            <h2>Welcome to JavaScript!</h2>
            <p>JavaScript is a versatile programming language that powers the web. Let's start with the basics.</p>
            
            <h3>What is JavaScript?</h3>
            <p>JavaScript is a high-level, interpreted programming language that enables interactive web pages.</p>
            
            <div class="interactive-element">
                <p>Click the button to see a JavaScript alert:</p>
                <button data-action="show-alert">Show Alert</button>
            </div>
            
            <h3>Your First JavaScript Code</h3>
            <p>Let's write some basic JavaScript:</p>
            <pre><code class="language-javascript">console.log("Hello, World!");</code></pre>
            
            <div class="interactive-element">
                <p>Click to see the current date and time:</p>
                <button data-action="show-date">Get Current Time</button>
            </div>
        `,
        initialCode: 'console.log("Hello, World!");'
    },
    {
        id: 'variables',
        title: 'Variables and Data Types',
        content: `
            <h2>Variables and Data Types</h2>
            <p>Variables are containers for storing data values. JavaScript has several data types.</p>
            
            <h3>Declaring Variables</h3>
            <p>You can declare variables using <code>let</code>, <code>const</code>, or <code>var</code>:</p>
            <pre><code class="language-javascript">let name = "John";
const age = 25;
var city = "New York";</code></pre>
            
            <div class="interactive-element">
                <p>Click to see a random number calculation:</p>
                <button data-action="calculate-sum">Calculate Random Sum</button>
            </div>
            
            <h3>Data Types</h3>
            <ul>
                <li><strong>String:</strong> Text data</li>
                <li><strong>Number:</strong> Numeric data</li>
                <li><strong>Boolean:</strong> true or false</li>
                <li><strong>Object:</strong> Complex data structures</li>
            </ul>
            
            <div class="interactive-element">
                <p>Click to generate a random number:</p>
                <button data-action="show-random">Generate Random Number</button>
            </div>
        `,
        initialCode: `let firstName = "John";
let lastName = "Doe";
let age = 25;

console.log("Name:", firstName + " " + lastName);
console.log("Age:", age);`
    },
    {
        id: 'functions',
        title: 'Functions',
        content: `
            <h2>Functions in JavaScript</h2>
            <p>Functions are reusable blocks of code that perform specific tasks.</p>
            
            <h3>Function Declaration</h3>
            <pre><code class="language-javascript">function greet(name) {
    return "Hello, " + name + "!";
}</code></pre>
            
            <div class="interactive-element">
                <p>Test user input with a function:</p>
                <button data-action="show-input">Get User Input</button>
            </div>
            
            <h3>Arrow Functions</h3>
            <p>ES6 introduced arrow functions, a shorter way to write functions:</p>
            <pre><code class="language-javascript">const greet = (name) => {
    return "Hello, " + name + "!";
};</code></pre>
            
            <div class="interactive-element">
                <p>Click to count your clicks:</p>
                <button data-action="count-clicks">Click Counter</button>
            </div>
        `,
        initialCode: `function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Arrow function
const add = (a, b) => a + b;
console.log("5 + 3 =", add(5, 3));`
    },
    {
        id: 'objects',
        title: 'Objects and Arrays',
        content: `
            <h2>Objects and Arrays</h2>
            <p>Objects and arrays are used to store multiple values in JavaScript.</p>
            
            <h3>Objects</h3>
            <p>Objects store data in key-value pairs:</p>
            <pre><code class="language-javascript">const person = {
    name: "John",
    age: 30,
    city: "New York"
};</code></pre>
            
            <div class="interactive-element">
                <p>Click to change the background color:</p>
                <button data-action="change-background">Change Background</button>
            </div>
            
            <h3>Arrays</h3>
            <p>Arrays store multiple values in a single variable:</p>
            <pre><code class="language-javascript">const fruits = ["apple", "banana", "orange"];</code></pre>
            
            <div class="interactive-element">
                <p>Custom JavaScript demonstration:</p>
                <button data-action="custom-code" data-code="const colors = ['red', 'blue', 'green']; console.log('Available colors:', colors); console.log('First color:', colors[0]);">Show Array Demo</button>
            </div>
        `,
        initialCode: `// Creating an object
const person = {
    name: "Alice",
    age: 28,
    hobbies: ["reading", "coding", "hiking"]
};

console.log("Person:", person);
console.log("Name:", person.name);
console.log("Hobbies:", person.hobbies);

// Creating an array
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
console.log("First number:", numbers[0]);`
    },
    {
        id: 'control-structures',
        title: 'Control Structures',
        content: `
            <h2>Control Structures</h2>
            <p>Control structures allow you to control the flow of your program execution.</p>
            
            <h3>Conditional Statements</h3>
            <p>Use <code>if</code>, <code>else if</code>, and <code>else</code> to make decisions:</p>
            <pre><code class="language-javascript">const age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}</code></pre>
            
            <div class="interactive-element">
                <p>Test age verification:</p>
                <button data-action="custom-code" data-code="const randomAge = Math.floor(Math.random() * 30) + 10; console.log('Random age:', randomAge); if (randomAge >= 18) { console.log('✓ Adult'); } else { console.log('✗ Minor'); }">Check Random Age</button>
            </div>
            
            <h3>Switch Statement</h3>
            <p>Use <code>switch</code> for multiple condition checks:</p>
            <pre><code class="language-javascript">const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}</code></pre>
            
            <div class="interactive-element">
                <p>Test switch statement with random day:</p>
                <button data-action="custom-code" data-code="const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; const randomDay = days[Math.floor(Math.random() * days.length)]; console.log('Day:', randomDay); switch(randomDay) { case 'Monday': console.log('😴 Monday Blues'); break; case 'Friday': console.log('🎉 TGIF!'); break; default: console.log('📅 Regular day'); }">Random Day Check</button>
            </div>
            
            <h3>Ternary Operator</h3>
            <p>A shorthand for simple if-else statements:</p>
            <pre><code class="language-javascript">const isAdult = age >= 18 ? "Yes" : "No";</code></pre>
        `,
        initialCode: `// If-else example
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary operator
const result = score >= 70 ? "Pass" : "Fail";
console.log("Result:", result);

// Switch statement
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
switch (grade) {
    case "A":
        console.log("Excellent work!");
        break;
    case "B":
        console.log("Good job!");
        break;
    default:
        console.log("Keep improving!");
}`
    },
    {
        id: 'loops',
        title: 'Loops and Iteration',
        content: `
            <h2>Loops and Iteration</h2>
            <p>Loops allow you to repeat code multiple times efficiently.</p>
            
            <h3>For Loop</h3>
            <p>The most common loop for counting:</p>
            <pre><code class="language-javascript">for (let i = 0; i < 5; i++) {
    console.log("Count:", i);
}</code></pre>
            
            <div class="interactive-element">
                <p>See a for loop in action:</p>
                <button data-action="custom-code" data-code="console.log('Counting to 5:'); for (let i = 1; i <= 5; i++) { console.log('Number:', i); }">Run For Loop</button>
            </div>
            
            <h3>While Loop</h3>
            <p>Repeats while a condition is true:</p>
            <pre><code class="language-javascript">let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}</code></pre>
            
            <div class="interactive-element">
                <p>Demonstrate while loop:</p>
                <button data-action="custom-code" data-code="let num = 1; console.log('Powers of 2:'); while (num <= 16) { console.log(num); num *= 2; }">Powers of 2</button>
            </div>
            
            <h3>Array Iteration</h3>
            <p>Special methods for working with arrays:</p>
            <pre><code class="language-javascript">const fruits = ["apple", "banana", "orange"];
fruits.forEach(fruit => console.log(fruit));</code></pre>
            
            <div class="interactive-element">
                <p>Array iteration methods:</p>
                <button data-action="custom-code" data-code="const numbers = [1, 2, 3, 4, 5]; console.log('Original:', numbers); console.log('Doubled:'); numbers.forEach(num => console.log(num * 2)); const evens = numbers.filter(num => num % 2 === 0); console.log('Even numbers:', evens);">Array Methods</button>
            </div>
            
            <h3>Break and Continue</h3>
            <p>Control loop execution with <code>break</code> and <code>continue</code>:</p>
            <pre><code class="language-javascript">for (let i = 0; i < 10; i++) {
    if (i === 5) break;        // Exit loop
    if (i % 2 === 0) continue; // Skip even numbers
    console.log(i);
}</code></pre>
        `,
        initialCode: `// For loop example
console.log("=== For Loop ===");
for (let i = 1; i <= 5; i++) {
    console.log(\`Iteration \${i}\`);
}

// Array iteration
console.log("\\n=== Array Iteration ===");
const colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
    console.log(\`Color \${index + 1}: \${color}\`);
});

// While loop with condition
console.log("\\n=== While Loop ===");
let countdown = 5;
while (countdown > 0) {
    console.log(\`Countdown: \${countdown}\`);
    countdown--;
}
console.log("Blast off! 🚀");`
    },
    {
        id: 'dom-manipulation',
        title: 'DOM Manipulation',
        content: `
            <h2>DOM Manipulation</h2>
            <p>The Document Object Model (DOM) allows JavaScript to interact with HTML elements.</p>
            
            <h3>Selecting Elements</h3>
            <p>Find elements in your HTML document:</p>
            <pre><code class="language-javascript">// Select by ID
const element = document.getElementById("myId");

// Select by class
const elements = document.getElementsByClassName("myClass");

// Select by CSS selector
const element = document.querySelector(".myClass");
const elements = document.querySelectorAll("div");</code></pre>
            
            <div class="interactive-element">
                <p>Create and modify elements:</p>
                <button data-action="custom-code" data-code="const newDiv = document.createElement('div'); newDiv.textContent = 'Hello from JavaScript!'; newDiv.style.color = 'blue'; newDiv.style.padding = '10px'; newDiv.style.border = '2px solid blue'; newDiv.style.margin = '10px'; console.log('Created element:', newDiv); console.log('Element HTML:', newDiv.outerHTML);">Create Element</button>
            </div>
            
            <h3>Modifying Content</h3>
            <p>Change text and HTML content:</p>
            <pre><code class="language-javascript">element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";
element.style.color = "red";</code></pre>
            
            <div class="interactive-element">
                <p>Demonstrate style changes:</p>
                <button data-action="custom-code" data-code="const styles = ['color: red', 'color: blue', 'color: green', 'font-weight: bold', 'font-size: 20px']; const randomStyle = styles[Math.floor(Math.random() * styles.length)]; console.log('Applied style:', randomStyle); console.log('This would change element appearance in real DOM');">Random Styling</button>
            </div>
            
            <h3>Event Handling</h3>
            <p>Respond to user interactions:</p>
            <pre><code class="language-javascript">button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function syntax
button.addEventListener("click", () => {
    console.log("Button clicked!");
});</code></pre>
            
            <div class="interactive-element">
                <p>Simulate event handling:</p>
                <button data-action="custom-code" data-code="const events = ['click', 'mouseover', 'keypress', 'submit']; const randomEvent = events[Math.floor(Math.random() * events.length)]; console.log(\`Simulating '\${randomEvent}' event\`); console.log('Event handler would execute now'); console.log('Event object would contain event details');">Simulate Event</button>
            </div>
            
            <h3>Common DOM Methods</h3>
            <ul>
                <li><code>createElement()</code> - Create new elements</li>
                <li><code>appendChild()</code> - Add elements to parent</li>
                <li><code>removeChild()</code> - Remove elements</li>
                <li><code>getAttribute()</code> - Get attribute values</li>
                <li><code>setAttribute()</code> - Set attribute values</li>
            </ul>
        `,
        initialCode: `// DOM Manipulation Examples (simulated)
console.log("=== DOM Element Creation ===");

// Create a new element
const newElement = {
    tagName: "div",
    textContent: "Hello World!",
    className: "greeting",
    style: {
        color: "blue",
        fontSize: "18px"
    }
};

console.log("Created element:", newElement);

// Simulate element selection
console.log("\\n=== Element Selection ===");
const simulatedElements = [
    { id: "header", tagName: "h1", textContent: "Main Title" },
    { id: "content", tagName: "div", textContent: "Page content" },
    { id: "footer", tagName: "footer", textContent: "Footer text" }
];

simulatedElements.forEach(el => {
    console.log(\`Found element: <\${el.tagName}> with ID '\${el.id}'\`);
});

// Event simulation
console.log("\\n=== Event Handling ===");
function handleClick() {
    console.log("Click event triggered!");
    console.log("Current time:", new Date().toLocaleTimeString());
}

console.log("Event listener added for 'click' event");
handleClick(); // Simulate the event`
    },
    {
        id: 'error-handling',
        title: 'Error Handling',
        content: `
            <h2>Error Handling</h2>
            <p>Handle errors gracefully to prevent your application from crashing.</p>
            
            <h3>Try-Catch Blocks</h3>
            <p>Catch and handle errors that might occur:</p>
            <pre><code class="language-javascript">try {
    // Code that might throw an error
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("This always runs");
}</code></pre>
            
            <div class="interactive-element">
                <p>Demonstrate error handling:</p>
                <button data-action="custom-code" data-code="try { console.log('Attempting risky operation...'); const num = Math.random(); if (num < 0.5) { throw new Error('Random failure occurred!'); } console.log('✓ Operation successful!'); } catch (error) { console.log('❌ Caught error:', error.message); } finally { console.log('🔄 Cleanup completed'); }">Try-Catch Demo</button>
            </div>
            
            <h3>Types of Errors</h3>
            <p>Common JavaScript error types:</p>
            <ul>
                <li><strong>SyntaxError:</strong> Invalid JavaScript syntax</li>
                <li><strong>ReferenceError:</strong> Variable not defined</li>
                <li><strong>TypeError:</strong> Wrong data type used</li>
                <li><strong>RangeError:</strong> Number out of range</li>
            </ul>
            
            <div class="interactive-element">
                <p>See different error types:</p>
                <button data-action="custom-code" data-code="const errorTypes = ['Reference', 'Type', 'Range']; const randomType = errorTypes[Math.floor(Math.random() * errorTypes.length)]; console.log(\`Simulating \${randomType}Error:\`); try { switch(randomType) { case 'Reference': console.log(undefinedVariable); break; case 'Type': null.someMethod(); break; case 'Range': new Array(-1); break; } } catch (error) { console.log('Error type:', error.constructor.name); console.log('Error message:', error.message); }">Random Error</button>
            </div>
            
            <h3>Throwing Custom Errors</h3>
            <p>Create your own error messages:</p>
            <pre><code class="language-javascript">function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}</code></pre>
            
            <div class="interactive-element">
                <p>Custom error example:</p>
                <button data-action="custom-code" data-code="function validateAge(age) { if (typeof age !== 'number') { throw new TypeError('Age must be a number'); } if (age < 0) { throw new RangeError('Age cannot be negative'); } if (age > 150) { throw new RangeError('Age seems unrealistic'); } return true; } try { const testAge = Math.floor(Math.random() * 200) - 10; console.log('Testing age:', testAge); validateAge(testAge); console.log('✓ Age is valid'); } catch (error) { console.log('❌ Validation failed:', error.message); }">Validate Age</button>
            </div>
            
            <h3>Best Practices</h3>
            <ul>
                <li>Always handle potential errors in user input</li>
                <li>Use specific error messages for debugging</li>
                <li>Log errors for monitoring in production</li>
                <li>Provide user-friendly error messages</li>
            </ul>
        `,
        initialCode: `// Error Handling Examples

console.log("=== Basic Try-Catch ===");
try {
    const data = JSON.parse('{"name": "John", "age": 30}');
    console.log("Parsed data:", data);
    
    // This will work fine
    console.log("Name:", data.name);
    
    // This might cause an error if property doesn't exist
    console.log("City:", data.city.toUpperCase());
} catch (error) {
    console.log("Error caught:", error.message);
}

console.log("\\n=== Custom Error Function ===");
function safeDivide(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Both arguments must be numbers");
        }
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } catch (error) {
        console.log("Division error:", error.message);
        return null;
    }
}

console.log("10 ÷ 2 =", safeDivide(10, 2));
console.log("10 ÷ 0 =", safeDivide(10, 0));
console.log("'10' ÷ 2 =", safeDivide("10", 2));`
    },
    {
        id: 'async-programming',
        title: 'Asynchronous Programming',
        content: `
            <h2>Asynchronous Programming</h2>
            <p>Handle operations that take time without blocking your application.</p>
            
            <h3>Promises</h3>
            <p>Handle asynchronous operations with Promises:</p>
            <pre><code class="language-javascript">const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});</code></pre>
            
            <div class="interactive-element">
                <p>Simulate promise execution:</p>
                <button data-action="custom-code" data-code="console.log('Creating promise...'); const mockPromise = Math.random() > 0.5; console.log('Promise will:', mockPromise ? 'resolve' : 'reject'); if (mockPromise) { console.log('✓ Promise resolved: Data received successfully'); } else { console.log('❌ Promise rejected: Network error occurred'); } console.log('Promise handling completed');">Mock Promise</button>
            </div>
            
            <h3>Async/Await</h3>
            <p>Modern syntax for handling promises:</p>
            <pre><code class="language-javascript">async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error.message);
    }
}</code></pre>
            
            <div class="interactive-element">
                <p>Async/await simulation:</p>
                <button data-action="custom-code" data-code="async function simulateAsyncOperation() { console.log('🔄 Starting async operation...'); await new Promise(resolve => { console.log('⏳ Simulating network delay...'); setTimeout(() => { console.log('📡 Network request completed'); resolve(); }, 100); }); console.log('✅ Async operation finished'); return 'Success!'; } simulateAsyncOperation().then(result => console.log('Final result:', result));">Async Demo</button>
            </div>
            
            <h3>Callback Functions</h3>
            <p>The traditional way to handle asynchronous operations:</p>
            <pre><code class="language-javascript">function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "John" };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Data:", data);
    }
});</code></pre>
            
            <div class="interactive-element">
                <p>Callback example:</p>
                <button data-action="custom-code" data-code="function processData(data, callback) { console.log('Processing:', data); setTimeout(() => { const processed = data.toUpperCase(); console.log('Processing complete!'); callback(processed); }, 50); } processData('hello world', (result) => { console.log('Callback received:', result); console.log('Length:', result.length); });">Callback Demo</button>
            </div>
            
            <h3>Promise Chaining</h3>
            <p>Chain multiple asynchronous operations:</p>
            <pre><code class="language-javascript">fetch('/api/user')
    .then(response => response.json())
    .then(user => fetch(\`/api/posts/\${user.id}\`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));</code></pre>
            
            <div class="interactive-element">
                <p>Promise chain simulation:</p>
                <button data-action="custom-code" data-code="console.log('🔗 Promise chain starting...'); Promise.resolve('step1') .then(result => { console.log('✓ Step 1 completed:', result); return 'step2'; }) .then(result => { console.log('✓ Step 2 completed:', result); return 'step3'; }) .then(result => { console.log('✓ Step 3 completed:', result); return 'final result'; }) .then(result => { console.log('🎉 Chain completed with:', result); }) .catch(error => console.log('❌ Chain failed:', error));">Promise Chain</button>
            </div>
        `,
        initialCode: `// Asynchronous Programming Examples

console.log("=== Promise Example ===");
function createPromise(delay, shouldResolve = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(\`Promise resolved after \${delay}ms\`);
            } else {
                reject(new Error(\`Promise rejected after \${delay}ms\`));
            }
        }, delay);
    });
}

// Using .then()
createPromise(100)
    .then(result => {
        console.log("Success:", result);
        return "Next step";
    })
    .then(result => {
        console.log("Chained:", result);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

console.log("\\n=== Async/Await Example ===");
async function runAsyncExample() {
    try {
        console.log("Starting async function...");
        const result1 = await createPromise(50);
        console.log("First result:", result1);
        
        const result2 = await createPromise(30);
        console.log("Second result:", result2);
        
        return "All operations completed";
    } catch (error) {
        console.log("Async error:", error.message);
    }
}

runAsyncExample().then(final => console.log("Final:", final));

console.log("This runs immediately (non-blocking)");`
    }
];
