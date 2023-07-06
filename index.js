// const inquirer = require("inquirer");
const Shapes = require("./lib/shapes");
const fs = require("fs");

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
    let y = "112.5";
    if (this.shape.shape === "triangle") {
      y = "140";
    }

    let fontSize = "60";
    if (this.text.length > 6) {
      fontSize = "40";
    }
    return `<text x="125" y="${y}" font-size="${fontSize}" text-anchor="middle" fill="white" stroke="black" stroke-width="1">${this.text}</text>`;
  }

  createSvgElements() {
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape.generateElement()} ${this.generateTextElement()}</svg>`;
  }

  createSvgFile() {
    this.createSvgElements();

    const pathName = "examples/logo.svg";
    try {
      fs.writeFileSync(pathName, this.svg);
      console.log("Successfully generated logo.svg");
    } catch (error) {
      console.log(error);
    }
  }
}

const logo = new Logo("circle", "#4faad1", "text");
logo.createSvgFile();
