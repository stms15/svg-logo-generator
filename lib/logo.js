const Shapes = require("./shapes");
const fs = require("fs");

// Logo class to initialize everything needed for the svg file
class Logo {
  constructor(shape, colour, text, textColour) {
    if (shape === "circle") {
      this.shape = new Shapes.Circle();
    } else if (shape === "square") {
      this.shape = new Shapes.Square();
    } else if (shape === "triangle") {
      this.shape = new Shapes.Triangle();
    } else {
      throw new Error(`Unsupported shape: ${shape}`);
    }

    this.shape.setColour(colour);
    this.setText(text);
    this.setTextColour(textColour);
  }

  // Set text string
  setText(text) {
    this.text = text;
  }

  // Set text colour
  setTextColour(textColour) {
    this.textColour = textColour;
  }

  // Create a string for the <text> element
  generateTextElement() {
    let y = "112.5";
    if (this.shape.shape === "triangle") {
      y = "147";
    }

    return `<text x="125" y="${y}" font-size="60" text-anchor="middle" fill="${this.textColour}" stroke="black" stroke-width="1">${this.text}</text>`;
  }

  // Create a string for the entire file inside the <svg> element
  createSvgElements() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape.generateElement()} ${this.generateTextElement()}</svg>`;
  }

  // Generate the svg element and write the results to logo.svg
  createSvgFile() {
    this.svg = this.createSvgElements();

    const pathName = "examples/logo.svg";
    try {
      fs.writeFileSync(pathName, this.svg);
      console.log("Successfully generated logo.svg");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Logo;
