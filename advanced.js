// Advanced JavaScript & Node.js Features
// --------------------------------------

// 1. Arrow Functions - shorter syntax for functions
const multiply = (a, b) => a * b;
console.log("Arrow function multiply(3, 4):", multiply(3, 4));

// 2. Destructuring - extract values from arrays/objects easily
const [first, second] = [10, 20];
const { platform, arch } = require('os');
console.log(`Destructured array: first=${first}, second=${second}`);
console.log(`Destructured object: platform=${platform}, arch=${arch}`);

// 3. Classes - blueprint for objects
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
const dogAnimal = new Animal("Rover");
dogAnimal.speak();

// 4. Modules - splitting code into files (CommonJS style)
const path = require('path');
console.log("Current file name:", path.basename(__filename));

// 5. Promises - handling asynchronous operations
function asyncAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject("Both inputs must be numbers");
            }
        }, 1000);
    });
}
asyncAdd(5, 7)
    .then(result => console.log("Promise result:", result))
    .catch(err => console.error("Promise error:", err));

// 6. Async/Await - cleaner async code
async function demoAsyncAwait() {
    try {
        const sum = await asyncAdd(10, 15);
        console.log("Async/Await result:", sum);
    } catch (err) {
        console.error("Async/Await error:", err);
    }
}
demoAsyncAwait();

// 7. File System Access (Node.js)
const fs = require('fs');
const demoFile = 'demo.txt';
// Note: fs.writeFileSync overwrites the file if it already exists.
// To avoid overwriting, check if the file exists first.
if (!fs.existsSync(demoFile)) {
    fs.writeFileSync(demoFile, 'Hello from Node.js file system!');
} else {
    console.log(`${demoFile} already exists. Skipping write.`);
}
const content = fs.readFileSync(demoFile, 'utf8');
console.log(`File content from ${demoFile}:`, content);

// 8. Error Handling - try/catch
try {
    // Parsing a valid JSON string for demonstration
    JSON.parse('{"valid": true}');
} catch (error) {
    console.error("Caught JSON parse error:", error.message);
}

console.log("NODE_ENV:", process.env.NODE_ENV || 'undefined');
console.log("NODE_ENV:", process.env.NODE_ENV);

// 10. Exporting/Importing (for modules)
// In Node.js, you can export functions/objects from one file and import them in another using require/module.exports

// Example of exporting a function
function myFunction() {
    console.log("This is myFunction from myModule.js");
}
module.exports = { myFunction };

// Example of importing a function (uncomment the following lines if you create a separate file named 'myModule.js')
// const { myFunction } = require('./myModule');
// myFunction();

// End of advanced.js
