
/* 
Here it is higher Cohesion because we have split both in different class
and each other is responsible for single type of operation
*/


// Responsibility - Measurements of squares 
class Square {
    #side = 5;

    calculateArea() {
        return this.#side * this.#side;
    }

    calculatePerimeter() {
        return this.#side * 4
    }
}


// Responsibility - Rendering images of squares
class SquareUI {
    draw() { }

    rotate(degree) { }
}