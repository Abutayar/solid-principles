/* 
Here cohesion is lower because
 - We have Square class which is responsible for 2 thing as mention below
 1) Calculating Measure 
 2) And Rendering image of square
 which are different to each other
 so square class don't follow single-responsibility principle
*/

class Square {
    #side = 5;

    calculateArea() {
        return this.#side * this.#side;
    }

    calculatePerimeter() {
        return this.#side * 4
    }


    draw() {

    }

    rotate(degree) { }
}