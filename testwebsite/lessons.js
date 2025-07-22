// Lesson data for the JavaScript Learning Portal

window.appLessons = [
    {
        id: 'intro-javascript',
        title: 'Introduction to JavaScript',
        content: `
            <h2>Welcome to JavaScript!</h2>
            <p>JavaScript is one of the most important programming languages in modern software development. Originally created in 1995 by Brendan Eich at Netscape, JavaScript has evolved from a simple scripting language for web browsers into a powerful, versatile programming language that runs everywhere - from web browsers to servers, mobile applications, and even desktop software.</p>
            
            <h3>What is JavaScript?</h3>
            <p>JavaScript is a <strong>high-level, interpreted programming language</strong> that enables interactive web pages and dynamic content. Unlike compiled languages such as C++ or Java, JavaScript code is executed directly by an interpreter (like a web browser's JavaScript engine) without needing to be compiled into machine code first.</p>
            
            <p><strong>Key characteristics of JavaScript:</strong></p>
            <ul>
                <li><strong>Dynamic typing:</strong> Variables don't need explicit type declarations</li>
                <li><strong>Interpreted:</strong> Code is executed line-by-line at runtime</li>
                <li><strong>Object-oriented:</strong> Supports objects, classes, and inheritance</li>
                <li><strong>Functional programming:</strong> Functions are first-class citizens</li>
                <li><strong>Event-driven:</strong> Can respond to user interactions and system events</li>
            </ul>
            
            <div class="interactive-element">
                <p>Experience JavaScript in action - click the button to see a JavaScript alert dialog:</p>
                <button data-action="show-alert">Show Alert</button>
            </div>
            
            <h3>JavaScript in the Modern World</h3>
            <p>Today, JavaScript powers countless applications and websites. It's the only programming language that runs natively in web browsers, making it essential for front-end development. With technologies like Node.js, JavaScript has also become popular for server-side development, allowing developers to use the same language across their entire application stack.</p>
            
            <p><strong>Common uses of JavaScript:</strong></p>
            <ul>
                <li><strong>Web Development:</strong> Interactive websites, single-page applications (SPAs)</li>
                <li><strong>Server-side Development:</strong> APIs, web servers using Node.js</li>
                <li><strong>Mobile Development:</strong> Cross-platform apps with React Native</li>
                <li><strong>Desktop Applications:</strong> Using frameworks like Electron</li>
                <li><strong>Game Development:</strong> Browser-based games and interactive media</li>
            </ul>
            
            <h3>Your First JavaScript Code</h3>
            <p>Let's start with the most fundamental concept in programming: output. The <code>console.log()</code> function is used to display information in the browser's developer console. This is invaluable for debugging and understanding how your code works.</p>
            <pre><code class="language-javascript">console.log("Hello, World!");</code></pre>
            
            <p>This single line of code demonstrates several important concepts:</p>
            <ul>
                <li><code>console</code> is a built-in object that provides access to the browser's debugging console</li>
                <li><code>log()</code> is a method (function) of the console object</li>
                <li><code>"Hello, World!"</code> is a string literal - text enclosed in quotes</li>
                <li>The semicolon (;) marks the end of the statement</li>
            </ul>
            
            <div class="interactive-element">
                <p>See how JavaScript can interact with time and display dynamic content:</p>
                <button data-action="show-date">Get Current Time</button>
            </div>
            
            <h3>How JavaScript Executes</h3>
            <p>JavaScript runs in an <strong>execution context</strong>. In web browsers, this context includes the Document Object Model (DOM), which represents the HTML structure of the page. JavaScript can read and modify this DOM, enabling dynamic, interactive web experiences.</p>
            
            <p>When you write JavaScript code, the browser's JavaScript engine (like Chrome's V8 or Firefox's SpiderMonkey) parses your code, compiles it to an intermediate form, and then executes it. This process happens very quickly, often in milliseconds.</p>
            
            <h3>Getting Started</h3>
            <p>Throughout this course, you'll learn JavaScript through hands-on practice. Each lesson includes interactive examples and a code editor where you can experiment with the concepts you're learning. Don't hesitate to modify the code examples - experimentation is one of the best ways to learn programming!</p>
        `,
        initialCode: `// Welcome to JavaScript programming!
// This is a comment - it doesn't execute but helps explain code

console.log("Hello, World!");

// Let's explore some basic JavaScript features
console.log("Today's date is:", new Date().toDateString());
console.log("JavaScript can do math:", 5 + 3);
console.log("JavaScript can work with text:", "Hello" + " " + "JavaScript!");`
    },
    {
        id: 'variables',
        title: 'Variables and Data Types',
        content: `
            <h2>Variables and Data Types</h2>
            <p>Variables are fundamental building blocks in programming - they are named containers that store data values. Think of a variable as a labeled box where you can put different types of information and retrieve it later by referring to the label.</p>
            
            <h3>Understanding Variables</h3>
            <p>In JavaScript, variables serve as symbolic names for values. They allow us to store, retrieve, and manipulate data throughout our programs. Without variables, we would have to work with literal values directly, making our code repetitive and difficult to maintain.</p>
            
            <h3>Variable Declaration Keywords</h3>
            <p>JavaScript provides three keywords for declaring variables, each with different characteristics:</p>
            
            <h4>1. <code>let</code> - Block-Scoped Variables</h4>
            <p><code>let</code> is the modern way to declare variables that can be reassigned. Variables declared with <code>let</code> have <strong>block scope</strong>, meaning they only exist within the curly braces {} where they're defined.</p>
            <pre><code class="language-javascript">let userName = "John";
let age = 25;
userName = "Jane"; // This is allowed - reassignment</code></pre>
            
            <h4>2. <code>const</code> - Constants</h4>
            <p><code>const</code> declares variables that cannot be reassigned after their initial declaration. Use <code>const</code> for values that should remain constant throughout your program.</p>
            <pre><code class="language-javascript">const PI = 3.14159;
const COMPANY_NAME = "Tech Corp";
// PI = 3.14; // This would cause an error!</code></pre>
            
            <h4>3. <code>var</code> - Function-Scoped Variables (Legacy)</h4>
            <p><code>var</code> is the older way to declare variables. It has <strong>function scope</strong> and some quirky behaviors. Modern JavaScript development favors <code>let</code> and <code>const</code>.</p>
            <pre><code class="language-javascript">var city = "New York";
var population = 8000000;</code></pre>
            
            <div class="interactive-element">
                <p>See variables in action with a random calculation:</p>
                <button data-action="calculate-sum">Calculate Random Sum</button>
            </div>
            
            <h3>JavaScript Data Types</h3>
            <p>JavaScript is a <strong>dynamically typed</strong> language, meaning variables can hold different types of data, and you don't need to specify the type when declaring a variable. The JavaScript engine determines the type automatically based on the value assigned.</p>
            
            <h4>Primitive Data Types</h4>
            <p>These are the basic data types that represent single values:</p>
            
            <h5>1. String</h5>
            <p>Strings represent textual data. They can be enclosed in single quotes (''), double quotes (""), or backticks (\`\`) for template literals.</p>
            <pre><code class="language-javascript">let message = "Hello, World!";
let name = 'JavaScript';
let template = \`Welcome to \${name} programming!\`;</code></pre>
            
            <h5>2. Number</h5>
            <p>JavaScript has a single number type that represents both integers and floating-point numbers.</p>
            <pre><code class="language-javascript">let integer = 42;
let decimal = 3.14159;
let negative = -17;
let scientific = 2.5e6; // 2,500,000</code></pre>
            
            <h5>3. Boolean</h5>
            <p>Booleans represent logical values: <code>true</code> or <code>false</code>. They're essential for decision-making in programs.</p>
            <pre><code class="language-javascript">let isActive = true;
let isComplete = false;
let hasPermission = (age >= 18); // Expression result</code></pre>
            
            <h5>4. Undefined</h5>
            <p>A variable that has been declared but not assigned a value has the type <code>undefined</code>.</p>
            <pre><code class="language-javascript">let unassigned;
console.log(unassigned); // undefined</code></pre>
            
            <h5>5. Null</h5>
            <p><code>null</code> represents an intentional absence of any object value.</p>
            <pre><code class="language-javascript">let data = null; // Explicitly no value</code></pre>
            
            <div class="interactive-element">
                <p>Generate a random number to see the Number data type:</p>
                <button data-action="show-random">Generate Random Number</button>
            </div>
            
            <h4>Complex Data Types</h4>
            
            <h5>6. Object</h5>
            <p>Objects are collections of key-value pairs. They can represent complex entities with multiple properties.</p>
            <pre><code class="language-javascript">let person = {
    name: "Alice",
    age: 30,
    city: "Boston"
};</code></pre>
            
            <h5>7. Array</h5>
            <p>Arrays are special types of objects that store ordered lists of values.</p>
            <pre><code class="language-javascript">let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];</code></pre>
            
            <h3>Variable Naming Rules and Best Practices</h3>
            <p>Good variable names make your code more readable and maintainable:</p>
            <ul>
                <li><strong>Must start with:</strong> letter, underscore (_), or dollar sign ($)</li>
                <li><strong>Can contain:</strong> letters, numbers, underscores, dollar signs</li>
                <li><strong>Cannot be:</strong> JavaScript reserved words (like <code>function</code>, <code>class</code>)</li>
                <li><strong>Case sensitive:</strong> <code>name</code> and <code>Name</code> are different variables</li>
            </ul>
            
            <p><strong>Naming conventions:</strong></p>
            <ul>
                <li><strong>camelCase:</strong> <code>firstName</code>, <code>totalAmount</code> (most common)</li>
                <li><strong>Descriptive names:</strong> <code>userAge</code> instead of <code>a</code></li>
                <li><strong>Constants:</strong> <code>MAXIMUM_RETRIES</code> (all uppercase)</li>
            </ul>
            
            <h3>Type Coercion and Conversion</h3>
            <p>JavaScript automatically converts between different data types when needed (type coercion), but you can also explicitly convert types:</p>
            <pre><code class="language-javascript">// Automatic coercion
let result = "5" + 3; // "53" (string concatenation)
let math = "5" - 3;   // 2 (number subtraction)

// Explicit conversion
let stringNum = "123";
let actualNum = Number(stringNum); // 123
let text = String(456); // "456"</code></pre>
        `,
        initialCode: `// Variable Declaration and Data Types Examples

// Different ways to declare variables
let mutableVariable = "I can change";
const immutableVariable = "I cannot change";
var oldStyleVariable = "Old way (avoid in modern code)";

console.log("=== Variable Examples ===");
console.log("Mutable:", mutableVariable);
console.log("Immutable:", immutableVariable);

// Demonstrating different data types
console.log("\\n=== Data Types ===");

// String data type
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // String concatenation
console.log("String:", fullName, "| Type:", typeof fullName);

// Number data type
let age = 25;
let height = 5.9;
let temperature = -10;
console.log("Numbers:", age, height, temperature, "| Type:", typeof age);

// Boolean data type
let isStudent = true;
let hasGraduated = false;
console.log("Booleans:", isStudent, hasGraduated, "| Type:", typeof isStudent);

// Undefined and null
let undefinedVar;
let nullVar = null;
console.log("Undefined:", undefinedVar, "| Type:", typeof undefinedVar);
console.log("Null:", nullVar, "| Type:", typeof nullVar);

// Demonstration of dynamic typing
let dynamicVar = "Starting as string";
console.log("\\n=== Dynamic Typing ===");
console.log("Initial:", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = 42;
console.log("Changed to:", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = true;
console.log("Changed to:", dynamicVar, "| Type:", typeof dynamicVar);`
    },
    {
        id: 'functions',
        title: 'Functions',
        content: `
            <h2>Functions in JavaScript</h2>
            <p>Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task. Think of functions as mini-programs within your larger program - they take input (called parameters), process it, and optionally return a result.</p>
            
            <h3>Why Functions Matter</h3>
            <p>Functions serve several crucial purposes in programming:</p>
            <ul>
                <li><strong>Code Reusability:</strong> Write once, use many times</li>
                <li><strong>Organization:</strong> Break complex problems into smaller, manageable pieces</li>
                <li><strong>Abstraction:</strong> Hide implementation details behind a simple interface</li>
                <li><strong>Testing:</strong> Easier to test individual functions than entire programs</li>
                <li><strong>Debugging:</strong> Isolate and fix problems more efficiently</li>
            </ul>
            
            <h3>Function Anatomy</h3>
            <p>A JavaScript function consists of several parts:</p>
            <ul>
                <li><strong>Function keyword:</strong> <code>function</code> (for function declarations)</li>
                <li><strong>Function name:</strong> An identifier to call the function</li>
                <li><strong>Parameters:</strong> Input values enclosed in parentheses</li>
                <li><strong>Function body:</strong> Code block enclosed in curly braces</li>
                <li><strong>Return statement:</strong> Optional value to send back to the caller</li>
            </ul>
            
            <h3>Function Declaration</h3>
            <p>Function declarations define a named function that can be called before it's defined in your code (due to "hoisting"):</p>
            <pre><code class="language-javascript">function greet(name) {
    return "Hello, " + name + "!";
}

// Function can be called before declaration due to hoisting
console.log(greet("Alice")); // "Hello, Alice!"</code></pre>
            
            <h4>Parameters vs Arguments</h4>
            <p>It's important to understand the distinction:</p>
            <ul>
                <li><strong>Parameters:</strong> Variables listed in the function definition (<code>name</code> in the example above)</li>
                <li><strong>Arguments:</strong> Actual values passed to the function when called (<code>"Alice"</code> in the example above)</li>
            </ul>
            
            <div class="interactive-element">
                <p>Experience function interaction with user input:</p>
                <button data-action="show-input">Get User Input</button>
            </div>
            
            <h3>Function Expressions</h3>
            <p>Functions can also be created as expressions and assigned to variables. These are not hoisted, so they must be defined before use:</p>
            <pre><code class="language-javascript">const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 3)); // 15</code></pre>
            
            <h3>Arrow Functions (ES6)</h3>
            <p>ES6 (ECMAScript 2015) introduced arrow functions, which provide a more concise syntax for writing functions. They're particularly useful for short, simple functions:</p>
            
            <h4>Basic Arrow Function Syntax</h4>
            <pre><code class="language-javascript">// Traditional function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function equivalent
const addArrow = (a, b) => {
    return a + b;
};

// Shortened arrow function (implicit return)
const addShort = (a, b) => a + b;</code></pre>
            
            <h4>Arrow Function Variations</h4>
            <pre><code class="language-javascript">// No parameters
const sayHello = () => "Hello!";

// Single parameter (parentheses optional)
const square = x => x * x;
const squareVerbose = (x) => x * x;

// Multiple parameters (parentheses required)
const divide = (a, b) => a / b;

// Multiple statements (curly braces and return required)
const processNumber = (num) => {
    const doubled = num * 2;
    const message = \`Result: \${doubled}\`;
    return message;
};</code></pre>
            
            <div class="interactive-element">
                <p>See functions in action with a click counter:</p>
                <button data-action="count-clicks">Click Counter</button>
            </div>
            
            <h3>Function Parameters and Default Values</h3>
            <p>Functions can accept multiple parameters and have default values for optional parameters:</p>
            <pre><code class="language-javascript">// Function with default parameters
function createUser(name, role = "user", isActive = true) {
    return {
        name: name,
        role: role,
        isActive: isActive
    };
}

console.log(createUser("John")); 
// { name: "John", role: "user", isActive: true }

console.log(createUser("Admin", "administrator", false));
// { name: "Admin", role: "administrator", isActive: false }</code></pre>
            
            <h3>Rest Parameters</h3>
            <p>Functions can accept a variable number of arguments using rest parameters:</p>
            <pre><code class="language-javascript">function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15</code></pre>
            
            <h3>Higher-Order Functions</h3>
            <p>JavaScript treats functions as "first-class citizens," meaning functions can be:</p>
            <ul>
                <li>Assigned to variables</li>
                <li>Passed as arguments to other functions</li>
                <li>Returned from other functions</li>
                <li>Stored in data structures</li>
            </ul>
            
            <pre><code class="language-javascript">// Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12</code></pre>
            
            <h3>Scope and Closures</h3>
            <p><strong>Scope</strong> determines where variables can be accessed in your code. JavaScript has function scope and block scope:</p>
            <pre><code class="language-javascript">let globalVar = "I'm global";

function outerFunction() {
    let outerVar = "I'm in outer function";
    
    function innerFunction() {
        let innerVar = "I'm in inner function";
        // Can access all three variables here
        console.log(globalVar, outerVar, innerVar);
    }
    
    // Can access globalVar and outerVar, but not innerVar
    innerFunction();
}

// Can only access globalVar here</code></pre>
            
            <p><strong>Closures</strong> occur when an inner function has access to variables from its outer scope even after the outer function has finished executing:</p>
            <pre><code class="language-javascript">function counter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const myCounter = counter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3</code></pre>
            
            <h3>Best Practices for Functions</h3>
            <ul>
                <li><strong>Single Responsibility:</strong> Each function should do one thing well</li>
                <li><strong>Descriptive Names:</strong> Function names should clearly indicate what they do</li>
                <li><strong>Keep It Short:</strong> Generally, functions should be no more than 20-30 lines</li>
                <li><strong>Avoid Side Effects:</strong> Pure functions that don't modify external state are easier to test and debug</li>
                <li><strong>Use Default Parameters:</strong> Make functions more flexible and robust</li>
            </ul>
        `,
        initialCode: `// Comprehensive Function Examples

console.log("=== Function Declaration ===");
// Traditional function declaration (hoisted)
function calculateArea(length, width) {
    const area = length * width;
    return area;
}

console.log("Rectangle area (5x3):", calculateArea(5, 3));

console.log("\\n=== Function Expression ===");
// Function expression (not hoisted)
const calculatePerimeter = function(length, width) {
    return 2 * (length + width);
};

console.log("Rectangle perimeter (5x3):", calculatePerimeter(5, 3));

console.log("\\n=== Arrow Functions ===");
// Various arrow function syntaxes
const double = x => x * 2;                    // Single parameter, implicit return
const add = (a, b) => a + b;                  // Multiple parameters, implicit return
const greetUser = name => \`Hello, \${name}!\`;  // Template literal

console.log("Double 7:", double(7));
console.log("Add 4 + 6:", add(4, 6));
console.log(greetUser("JavaScript Learner"));

console.log("\\n=== Default Parameters ===");
function createGreeting(name, timeOfDay = "day", punctuation = "!") {
    return \`Good \${timeOfDay}, \${name}\${punctuation}\`;
}

console.log(createGreeting("Alice"));                    // Uses defaults
console.log(createGreeting("Bob", "morning"));           // Partial defaults
console.log(createGreeting("Charlie", "evening", "."));  // No defaults

console.log("\\n=== Higher-Order Functions ===");
// Function that takes another function as parameter
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log("Apply multiply:", applyOperation(6, 4, multiply));
console.log("Apply divide:", applyOperation(20, 4, divide));

console.log("\\n=== Closure Example ===");
function createCounter(startValue = 0) {
    let count = startValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => { count = startValue; return count; }
    };
}

const counter = createCounter(10);
console.log("Initial value:", counter.getValue());
console.log("After increment:", counter.increment());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());
console.log("After reset:", counter.reset());`
    },
    // ...existing code for objects lesson...
    {
        id: 'objects',
        title: 'Objects and Arrays',
        content: `
            <h2>Objects and Arrays</h2>
            <p>Objects and arrays are JavaScript's primary data structures for organizing and managing complex information. While primitive data types (like strings and numbers) store single values, objects and arrays allow us to group related data together in meaningful ways.</p>
            
            <h3>Understanding Objects</h3>
            <p>Objects in JavaScript are collections of <strong>key-value pairs</strong>, where each key (also called a property name) is associated with a value. Think of objects as real-world entities with characteristics - for example, a person has a name, age, and address.</p>
            
            <h4>Object Creation and Structure</h4>
            <p>Objects are created using curly braces <code>{}</code> with properties defined as <code>key: value</code> pairs:</p>
            <pre><code class="language-javascript">const person = {
    name: "John",
    age: 30,
    city: "New York",
    isEmployed: true
};</code></pre>
            
            <h4>Accessing Object Properties</h4>
            <p>There are two main ways to access object properties:</p>
            <pre><code class="language-javascript">// Dot notation (most common)
console.log(person.name);     // "John"
console.log(person.age);      // 30

// Bracket notation (useful for dynamic property names)
console.log(person["city"]);  // "New York"
const property = "isEmployed";
console.log(person[property]); // true</code></pre>
            
            <h4>Modifying Objects</h4>
            <p>Objects are <strong>mutable</strong>, meaning you can change their properties after creation:</p>
            <pre><code class="language-javascript">// Adding new properties
person.email = "john@example.com";
person["phone"] = "555-1234";

// Modifying existing properties
person.age = 31;
person.city = "Boston";

// Deleting properties
delete person.isEmployed;</code></pre>
            
            <div class="interactive-element">
                <p>See object interaction in action:</p>
                <button data-action="change-background">Change Background</button>
            </div>
            
            <h4>Nested Objects</h4>
            <p>Objects can contain other objects, creating hierarchical data structures:</p>
            <pre><code class="language-javascript">const employee = {
    personalInfo: {
        firstName: "Alice",
        lastName: "Johnson",
        age: 28
    },
    jobInfo: {
        title: "Software Developer",
        department: "Engineering",
        salary: 75000
    },
    contact: {
        email: "alice@company.com",
        phone: "555-0123"
    }
};

// Accessing nested properties
console.log(employee.personalInfo.firstName); // "Alice"
console.log(employee.jobInfo.title);          // "Software Developer"</code></pre>
            
            <h4>Object Methods</h4>
            <p>Objects can contain functions as properties, called <strong>methods</strong>:</p>
            <pre><code class="language-javascript">const calculator = {
    value: 0,
    add: function(number) {
        this.value += number;
        return this;
    },
    multiply: function(number) {
        this.value *= number;
        return this;
    },
    getResult: function() {
        return this.value;
    }
};

calculator.add(5).multiply(3);
console.log(calculator.getResult()); // 15</code></pre>
            
            <h3>Understanding Arrays</h3>
            <p>Arrays are ordered collections of values, where each value has a numeric index starting from 0. Arrays are perfect for storing lists of related items like shopping cart contents, user names, or data points.</p>
            
            <h4>Array Creation and Structure</h4>
            <pre><code class="language-javascript">// Array literal notation (most common)
const fruits = ["apple", "banana", "orange", "grape"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["text", 42, true, null, {name: "object"}];

// Array constructor (less common)
const emptyArray = new Array();
const prefilledArray = new Array(3).fill("default");</code></pre>
            
            <h4>Accessing Array Elements</h4>
            <p>Array elements are accessed using square bracket notation with the index:</p>
            <pre><code class="language-javascript">console.log(fruits[0]);  // "apple" (first element)
console.log(fruits[2]);  // "orange" (third element)
console.log(fruits[fruits.length - 1]); // "grape" (last element)

// Arrays are zero-indexed!
// Index:    0       1         2        3
// Array: ["apple", "banana", "orange", "grape"]</code></pre>
            
            <h4>Array Properties and Methods</h4>
            <p>Arrays come with built-in properties and methods for manipulation:</p>
            
            <h5>Essential Array Properties</h5>
            <pre><code class="language-javascript">const colors = ["red", "green", "blue"];
console.log(colors.length); // 3 - number of elements</code></pre>
            
            <h5>Adding and Removing Elements</h5>
            <pre><code class="language-javascript">// Adding elements
colors.push("yellow");        // Add to end: ["red", "green", "blue", "yellow"]
colors.unshift("purple");     // Add to beginning: ["purple", "red", "green", "blue", "yellow"]

// Removing elements
const lastColor = colors.pop();     // Remove from end: "yellow"
const firstColor = colors.shift();  // Remove from beginning: "purple"

// Insert/remove at specific position
colors.splice(1, 1, "orange");      // Remove 1 element at index 1, insert "orange"</code></pre>
            
            <div class="interactive-element">
                <p>Explore array methods with a practical example:</p>
                <button data-action="custom-code" data-code="const colors = ['red', 'blue', 'green']; console.log('Available colors:', colors); console.log('First color:', colors[0]); console.log('Array length:', colors.length); colors.push('yellow'); console.log('After adding yellow:', colors);">Show Array Demo</button>
            </div>
            
            <h5>Array Iteration Methods</h5>
            <p>Modern JavaScript provides powerful methods for iterating through arrays:</p>
            <pre><code class="language-javascript">const numbers = [1, 2, 3, 4, 5];

// forEach - execute function for each element
numbers.forEach(num => console.log(num * 2));

// map - create new array with transformed elements
const doubled = numbers.map(num => num * 2);
// doubled = [2, 4, 6, 8, 10]

// filter - create new array with elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
// evenNumbers = [2, 4]

// find - return first element that matches condition
const firstEven = numbers.find(num => num % 2 === 0);
// firstEven = 2

// reduce - reduce array to single value
const sum = numbers.reduce((total, num) => total + num, 0);
// sum = 15</code></pre>
            
            <h3>Arrays vs Objects: When to Use Which</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                <thead>
                    <tr style="background-color: var(--primary-color); color: white;">
                        <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Use Arrays When</th>
                        <th style="border: 1px solid var(--border-color); padding: 0.5rem;">Use Objects When</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Order matters</td>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">You need named properties</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Working with lists</td>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Representing real-world entities</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Need numeric indexing</td>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Properties have different types</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Performing operations on all items</td>
                        <td style="border: 1px solid var(--border-color); padding: 0.5rem;">Need methods with the data</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Combining Objects and Arrays</h3>
            <p>Real-world applications often combine objects and arrays to create complex data structures:</p>
            <pre><code class="language-javascript">const library = {
    name: "City Central Library",
    books: [
        {
            title: "The JavaScript Guide",
            author: "John Doe",
            isbn: "978-1234567890",
            available: true
        },
        {
            title: "Web Development Basics",
            author: "Jane Smith", 
            isbn: "978-0987654321",
            available: false
        }
    ],
    findBook: function(title) {
        return this.books.find(book => book.title === title);
    },
    getAvailableBooks: function() {
        return this.books.filter(book => book.available);
    }
};</code></pre>
            
            <h3>JSON (JavaScript Object Notation)</h3>
            <p>JSON is a text-based data format based on JavaScript object syntax, commonly used for data exchange between applications:</p>
            <pre><code class="language-javascript">// JavaScript object
const user = { name: "Alice", age: 25, city: "Boston" };

// Convert to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":25,"city":"Boston"}'

// Parse JSON string back to object
const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Alice"</code></pre>
        `,
        initialCode: `// Comprehensive Objects and Arrays Examples

console.log("=== Object Creation and Manipulation ===");
// Creating an object representing a student
const student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    major: "Computer Science",
    gpa: 3.8,
    courses: ["JavaScript", "Data Structures", "Algorithms"],
    
    // Object method
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    
    // Arrow function method (note: 'this' behaves differently)
    addCourse: function(courseName) {
        this.courses.push(courseName);
        return this.courses;
    }
};

console.log("Student name:", student.getFullName());
console.log("Major:", student.major);
console.log("Current courses:", student.courses);

// Adding a new course
student.addCourse("Database Systems");
console.log("Updated courses:", student.courses);

console.log("\\n=== Array Operations ===");
// Working with arrays of different data types
const shoppingCart = [
    { item: "Laptop", price: 999.99, quantity: 1 },
    { item: "Mouse", price: 29.99, quantity: 2 },
    { item: "Keyboard", price: 79.99, quantity: 1 }
];

console.log("Shopping cart items:");
shoppingCart.forEach((product, index) => {
    const total = product.price * product.quantity;
    console.log(\`\${index + 1}. \${product.item} - $\${product.price} x\${product.quantity} = $\${total.toFixed(2)}\`);
});

// Calculate total cart value using reduce
const totalValue = shoppingCart.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
}, 0);

console.log(\`Total cart value: $\${totalValue.toFixed(2)}\`);

console.log("\\n=== Array Methods Demonstration ===");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Original array:", numbers);

// Map - transform each element
const squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);

// Filter - get elements that meet criteria
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Find - get first element that meets criteria
const firstLargeNumber = numbers.find(num => num > 5);
console.log("First number > 5:", firstLargeNumber);

// Some and every - test array elements
const hasEvenNumber = numbers.some(num => num % 2 === 0);
const allPositive = numbers.every(num => num > 0);
console.log("Has even number:", hasEvenNumber);
console.log("All positive:", allPositive);

console.log("\\n=== Complex Data Structure ===");
// Company with departments and employees
const company = {
    name: "Tech Solutions Inc.",
    founded: 2010,
    departments: [
        {
            name: "Engineering",
            employees: [
                { name: "Bob Smith", position: "Senior Developer", salary: 90000 },
                { name: "Carol White", position: "Junior Developer", salary: 65000 }
            ]
        },
        {
            name: "Marketing", 
            employees: [
                { name: "David Brown", position: "Marketing Manager", salary: 75000 }
            ]
        }
    ],
    
    getTotalEmployees: function() {
        return this.departments.reduce((total, dept) => total + dept.employees.length, 0);
    },
    
    getAverageSalary: function() {
        let totalSalary = 0;
        let totalEmployees = 0;
        
        this.departments.forEach(dept => {
            dept.employees.forEach(emp => {
                totalSalary += emp.salary;
                totalEmployees++;
            });
        });
        
        return totalEmployees > 0 ? totalSalary / totalEmployees : 0;
    }
};

console.log("Company:", company.name);
console.log("Total employees:", company.getTotalEmployees());
console.log("Average salary: $" + company.getAverageSalary().toFixed(2));`
    },
    // ...existing code for remaining lessons...
];
