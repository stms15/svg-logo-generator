// Import Shapes classes
const { Circle, Square, Triangle } = require("./shapes");

// Create a testing suite for Circle
describe("Circle", () => {
  // A test is created to check that setColour does set the fill to the colour passed.
  describe("setColour", () => {
    it("should take the string input and set the fill colour", () => {
      const shape = new Circle();
      shape.setColour("blue");
      expect(shape.generateElement()).toEqual(
        '<circle cx="125" cy="100" r="80" fill="blue" stroke="black" stroke-width="1"/>'
      );
    });
  });
});

// Create a testing suite for Circle
describe("Square", () => {
  // A test is created to check that setColour does set the fill to the colour passed.
  describe("setColour", () => {
    it("should take the string input and set the fill colour", () => {
      const shape = new Square();
      shape.setColour("lightblue");
      expect(shape.generateElement()).toEqual(
        '<rect x="50" y="25" width="150" height="150" fill="lightblue" stroke="black" stroke-width="1"/>'
      );
    });
  });
});

// Create a testing suite for Circle
describe("Triangle", () => {
  // A test is created to check that setColour does set the fill to the colour passed.
  describe("setColour", () => {
    it("should take the string input and set the fill colour", () => {
      const shape = new Triangle();
      shape.setColour("#b181db");
      expect(shape.generateElement()).toEqual(
        '<polygon points="125,25 225,175 25,175" fill="#b181db" stroke="black" stroke-width="1"/>'
      );
    });
  });
});
