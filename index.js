// const inquirer = require("inquirer");
const Shapes = require("./lib/shapes");

class Logo {
  constructor(shape, colour, text) {
    this.colour = colour;
    this.text = text;

    if (shape === "circle") {
      this.shape = new Shapes.Circle(this.colour);
    } else if (shape === "square") {
      this.shape = new Shapes.Square(this.colour);
    } else if (shape === "triangle") {
      this.shape = new Shapes.Triangle(this.colour);
    } else {
      throw new Error(`Unsupported shape: ${shape}`);
    }
  }

  generateTextElement() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
  }

  createSvg() {
    this.svg = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg"> ${this.shape.generateElement()} ${this.generateTextElement()}</svg>`;
  }
}

const logo = new Logo("circle", "orange", "text");
logo.createSvg();
console.log(logo.svg);
