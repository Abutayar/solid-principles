/**
 * Represents a generic shape.
 */
class Shape {
    /**
     * Calculates the area of the shape.
     * @returns {number} The area of the shape.
     * @throws {Error} If the method is not implemented by subclasses.
     */
    calculateArea() {
      throw new Error("Method 'calculateArea' must be implemented");
    }
  }
  
  /**
   * Represents a rectangle.
   * @extends Shape
   */
  class Rectangle extends Shape {
    /**
     * Creates a rectangle.
     * @param {number} width - The width of the rectangle.
     * @param {number} height - The height of the rectangle.
     */
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    /**
     * Calculates the area of the rectangle.
     * @returns {number} The area of the rectangle.
     */
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  /**
   * Represents a circle.
   * @extends Shape
   */
  class Circle extends Shape {
    /**
     * Creates a circle.
     * @param {number} radius - The radius of the circle.
     */
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    /**
     * Calculates the area of the circle.
     * @returns {number} The area of the circle.
     */
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  /**
   * Calculates the total area of an array of shapes.
   * @param {Shape[]} shapes - An array of Shape objects.
   * @returns {number} The total area of all shapes in the array.
   */
  function calculateTotalArea(shapes) {
    let totalArea = 0;
    for (let shape of shapes) {
      totalArea += shape.calculateArea();
    }
    return totalArea;
  }
  
  // Usage example:
  const shapes = [
    new Rectangle(5, 4),
    new Circle(3)
  ];
  
  console.log(calculateTotalArea(shapes)); 
  