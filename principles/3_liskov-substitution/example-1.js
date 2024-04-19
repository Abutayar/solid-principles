/**
 * Represents a generic vehicle.
 */
class Vehicle {
    /**
     * Moves the vehicle.
     */
    move() {
        console.log("Moving...");
    }
}

/**
 * Represents a car.
 * @extends Vehicle
 */
class Car extends Vehicle {
    /**
     * Moves the car.
     */
    move() {
        this.drive();
    }

    drive() {
        console.log("Driving a car...");
    }
}

/**
 * Represents a bicycle.
 * @extends Vehicle
 */
class Bicycle extends Vehicle {
    /**
     * Moves the bicycle.
     */
    move() {
        this.ride()
    }
    ride() {
        console.log("Riding a bicycle...");
    }
}

/**
 * Function to make a vehicle travel.
 * @param {Vehicle} vehicle - The vehicle to travel.
 */
function travel(vehicle) {
    vehicle.move();
}

// Example usage:

const myCar = new Car();
const myBicycle = new Bicycle();

travel(myCar);       // Output: "Driving a car..."
travel(myBicycle);   // Output: "Riding a bicycle..."
