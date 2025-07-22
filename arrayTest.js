import Car, { FastCar } from './main.js';  // Importing the Car class

let cars = [new Car('Toyota', 'Camry'), new Car('Honda', 'Civic'), new FastCar('Ford', 'Mustang', 50)];

for (let i = 0; i < cars.length; i++) {
    cars[i].accelerate();
}
cars.push(new Car('Chevrolet', 'Malibu'));  // Adding a new car to the array
for (let i = 0; i < cars.length; i++) {
    cars[i].displayInfo();
}