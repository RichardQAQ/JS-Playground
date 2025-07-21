const { log } = require("console");

class Car {

    static MAX_SPEED = 200; // Static constant for maximum speed

    constructor(make, model) {
        this._make = make;      // Private convention with underscore
        this._model = model;
        this._speed = 0;
        this._isRunning = false;
    }

    // Getter for make (read-only)
    get make() {
        return this._make;
    }

    // Getter and setter for model
    get model() {
        return this._model;
    }

    set model(newModel) {
        if (typeof newModel !== 'string' || newModel.trim() === '') {
            throw new Error('Model must be a non-empty string');
        }
        this._model = newModel.trim();
    }

    // Getter and setter for speed with validation
    get speed() {
        return this._speed;
    }

    set speed(newSpeed) {
        if (newSpeed < 0) {
            throw new Error('Speed cannot be negative');
        }
        if (newSpeed > Car.MAX_SPEED) {
            console.warn('Warning: Speed exceeds safe limits!');
        }
        this._speed = newSpeed;

        // this._speed = (newSpeed < 0) ? 0 : newSpeed; 
        // Alternative: set to 0 if negative
        // if (newSpeed < 0) {
    }

    // Computed property - calculated on access
    get speedInKmh() {
        return this._speed * 1.60934; // Convert mph to km/h
    }

    // Getter and setter for engine state
    get isRunning() {
        return this._isRunning;
    }

    set isRunning(state) {
        this._isRunning = Boolean(state);
        if (!this._isRunning) {
            this._speed = 0; // Car stops when engine turns off
        }
    }

    // Computed property for car status
    get status() {
        if (!this._isRunning) return 'Parked';
        if (this._speed === 0) return 'Idling';
        if (this._speed > 60) return 'Highway speed';
        return 'City driving';
    }

    get propertyName() { /* return value */ }
    set propertyName(value) { /* validate/process value */ }

    accelerate(speed) {
        if (!this._isRunning) {
            console.log('Start the engine first!');
            return;
        }
        this.speed += speed; // Uses the setter with validation
    }

    displayInfo() {
        console.log(`${this.make} ${this.model}`);
        console.log(`Speed: ${this.speed} mph (${this.speedInKmh.toFixed(1)} km/h)`);
        console.log(`Status: ${this.status}`);
    }
}

class FastCar extends Car {
    constructor(make, model, speedBonus) {
        super(make, model);
        this.speedBonus = speedBonus; // Additional property for fast cars
    }

    accelerate() {
        console.log(`Accelerating ${this.make} ${this.model} with bonus speed!`);
        this.speed += this.speedBonus; // Increases speed by bonus amount
    }

}


let c1 = new Car('Toyota', 'Camry');
let c2 = new FastCar('Honda', '1', 10);
c2.accelerate();
console.log(c2.speed); // Should print 10

// Example usage demonstrating getter/setter properties
const myCar = new Car('Toyota', 'Camry');

// Using getters (looks like property access)
console.log(myCar.make);           // "Toyota"
console.log(myCar.speed);          // 0
console.log(myCar.speedInKmh);     // 0 (computed)
console.log(myCar.status);         // "Parked" (computed)

// Using setters (looks like property assignment)
myCar.isRunning = true;            // Uses setter
myCar.speed = 45;                  // Uses setter with validation

// This would throw an error:
// myCar.speed = -10;              // Error: Speed cannot be negative

// This works but shows warning:
myCar.speed = 150;                 // Warning: Speed exceeds safe limits!

myCar.displayInfo();

// Additional example usage
myCar.speed = 50;    // Uses setter
let currentSpeed = myCar.speed;  // Uses getter

