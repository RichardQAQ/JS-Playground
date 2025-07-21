let pi = 3.14;
let radius = 5;
let area = pi * radius * radius; // Calculate area of a circle
console.log(`Area of circle with radius ${radius} is ${area}`);

let favoriteFoods = ['Pizza', 'Sushi', 'Ice Cream'];
console.log("My favorite foods are:");
favoriteFoods.forEach(food => {
    console.log(`- ${food}`);
});
let msg = (favoriteFoods.length > 0) ? "I love food!" : "I need to try more foods!";
console.log(`Yes, ${msg}`);

// Demonstrate try/catch error handling
console.log("\nTry/Catch Demonstration:");

try {
    // Attempt to execute code that might throw an error
    console.log("Trying to execute code...");
    let result = undefinedVariable * 2; // This will throw a ReferenceError
    console.log("This line won't execute");
} catch (error) {
    // Handle the error
    console.log(`An error occurred: ${error.name}`);
    console.log(`Error message: ${error.message}`);
} finally {
    // This block always executes, regardless of whether an error occurred
    console.log("Finally block always executes");
}

// Demonstrate throwing a custom error
try {
    let age = -5;
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    console.log(`Age is ${age}`);
} catch (error) {
    console.log(`Caught custom error: ${error.message}`);
}

// for...in loop example
let i = 0;
for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}   
console.log(`Loop completed with i = ${i}`);

