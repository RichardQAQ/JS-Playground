const os = require('os');

console.log("Hello, World!");
// Introduction to JavaScript and Node.js
// --------------------------------------

// Welcome to JavaScript! This language powers the web and can run on servers with Node.js.
// Let's learn the basics:

// Comments start with // and are ignored when the code runs
// They're useful for explaining what your code does

// 1. Variables - storing and naming values
let name = "Student"; // 'let' creates a variable that can be changed
const course = "JavaScript Basics"; // 'const' creates a variable that cannot be changed

// 2. Different types of data
const number = 42;
const text = "Hello";
const list = [1, 2, 3, "mix", true];
const person = { name: "JavaScript Learner", level: "Beginner" };

// 3. Displaying output
console.log("Welcome to", course);
console.log(`Your name is ${name}`); // Template literals use backticks (`) and ${} for variables

// 4. Functions - reusable blocks of code
function greet(personName) {
    return `Hello, ${personName}!`;
}

console.log(greet(name));

// 5. Making decisions with if/else
const hour = new Date().getHours();
if (hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good day!");
}

// 6. Loops - repeating code
console.log("Counting to 3:");
for (let i = 1; i <= 3; i++) {
    console.log(i);
}

// 7. Node.js features - accessing system information
console.log(`You're running on ${os.platform()}`);

// 8. Asynchronous code - a key concept in JavaScript
console.log("JavaScript can run code after a delay:");
setTimeout(() => {
    console.log("This appears after 2 seconds!");
}, 2000);

// Try it yourself! Exercises:
console.log("\nEXERCISES:");
console.log("1. Create a variable with your favorite food");
console.log("2. Write a function that adds two numbers");
console.log("3. Create a loop that counts from 10 to 1");

// How to run this file:
console.log("\nTo run this code: open a terminal, navigate to this file's location");
console.log("and type: node helloworld.js");

