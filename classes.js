// Classes
class Car {
    constructor(make, model, topSpeed) {
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed;
    }

    get makeAndModel() {
        return `${this.make} ${this.model}`;
    }

    set makeAndModel(value) {
        [this.make, this.model] = value.split(' ');
    }

    drive() {
        console.log(
            `The ${this.make} ${this.model} is driving at a responsible speed`
        );
    }

    static compareTopSpeeds(car1, car2) {
        if (car1.topSpeed > car2.topSpeed) {
            console.log(
                `The ${car1.makeAndModel} is faster than the ${car2.makeAndModel}`
            );
        } else if (car2.topSpeed > car1.topSpeed) {
            console.log(
                `The ${car2.makeAndModel} is faster than the ${car1.makeAndModel}`
            );
        } else {
            console.log(
                `The ${car1.makeAndModel} and the ${car2.makeAndModel} have the same top speed`
            );
        }
    }
}
const car = new Car('Toyota', 'Camry', 120);
console.log(car);
car.drive();
// Getters & Setters
console.log(car.makeAndModel);
car.makeAndModel = 'Honda Civic';
console.log(car.makeAndModel);
// Inheritance
class RaceCar extends Car {
    race() {
        console.log(
            `The ${this.makeAndModel} is racing down the track at ${this.topSpeed} miles per hour`
        );
    }

    drive() {
        console.log(
            `The ${this.makeAndModel} is driving at a responsible speed, and it looks really cool`
        );
    }
}
const raceCar = new RaceCar('Chevy', 'Corvette', 200);
console.log(raceCar);
raceCar.drive();
raceCar.race();

// Static Methods
Car.compareTopSpeeds(car, raceCar);
const car2 = new Car('Ford', 'Focus', '115');

// Private Fields
class Boat {
    #length;
    #price;
    #name;
    constructor(length, price, name) {
        this.#length = length;
        this.#price = price;
        this.#name = name;
    }

    get length() {
        return this.#length;
    }

    set length(newValue) {
        if (newValue <= 0) {
            console.log('Invalid length');
        } else {
            this.#length = newValue;
        }
    }
}
const boat = new Boat(50, 50000, 'Jenny');
console.log(boat.length);
boat.length = -5;
