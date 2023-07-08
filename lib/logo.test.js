// Import Logo class
const Logo = require("./logo");

// Create a testing suite for Logo
describe("Logo", () => {
  // A test is created to check that setText does set the text to the string passed.
  describe("setText", () => {
    it("should take string input and set the text", () => {
      const logo = new Logo("circle", "lightblue", "", "white");
      logo.setText("SVG");
      expect(logo.generateTextElement()).toEqual(
        '<text x="125" y="112.5" font-size="60" text-anchor="middle" fill="white" stroke="black" stroke-width="1">SVG</text>'
      );
    });
  });
});

// Create a testing suite for Logo
describe("Logo", () => {
  // A test is created to check that setTextColour does set the text colour to the colour passed.
  describe("setTextColour", () => {
    it("should take string input and set the text colour", () => {
      const logo = new Logo("circle", "lightblue", "SVG", "");
      logo.setTextColour("black");
      expect(logo.generateTextElement()).toEqual(
        '<text x="125" y="112.5" font-size="60" text-anchor="middle" fill="black" stroke="black" stroke-width="1">SVG</text>'
      );
    });
  });
});

// Create a testing suite for Logo
describe("Logo", () => {
  // A test is created to check that createSvgElements does render the svg.
  describe("createSvgElements", () => {
    it("should render the svg file contents after creating a new shape and setting variables", () => {
      const logo = new Logo("circle", "lightblue", "SVG", "white");
      expect(logo.createSvgElements()).toEqual(
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="125" cy="100" r="80" fill="lightblue" stroke="black" stroke-width="1"/> <text x="125" y="112.5" font-size="60" text-anchor="middle" fill="white" stroke="black" stroke-width="1">SVG</text></svg>'
      );
    });
  });
});
