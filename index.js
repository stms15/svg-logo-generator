const inquirer = require("inquirer");
const Shapes = require("./lib/shapes");
const fs = require("fs");

// Logo class to initialize everything needed for the svg file
class Logo {
  constructor(shape, colour, text, textColour) {
    this.colour = colour;
    this.text = text;
    this.textColour = textColour;

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

  // Create a string for the <text> element
  generateTextElement() {
    let y = "112.5";
    if (this.shape.shape === "triangle") {
      y = "140";
    }

    return `<text x="125" y="${y}" font-size="60" text-anchor="middle" fill="${this.textColour}" stroke="black" stroke-width="1">${this.text}</text>`;
  }

  // Create a string for the entire file inside the <svg> element
  createSvgElements() {
    this.svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape.generateElement()} ${this.generateTextElement()}</svg>`;
  }

  // Generate the svg element and write the results to logo.svg
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

// Function to initalize the app and prompt the user for input
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose a shape:",
        choices: ["circle", "square", "triangle"],
        name: "shape",
      },
      {
        type: "input",
        message: "Enter a background colour (name or hex code):",
        name: "colour",
      },
      {
        type: "input",
        message:
          "Do you want to add any text to your logo? You can enter up to 3 characters.\nIf no, hit enter/submit an empty string.",
        name: "text",
      },
      {
        type: "input",
        message: "Enter a text colour (name or hex code):",
        name: "textColour",
      },
    ])
    .then((response) => {
      // Validate text length
      if (response.text.length > 3) {
        throw new Error(
          "Text length is too long. Maximum of 3 characters allowed."
        );
      }
      // Generate svg logo
      const logo = new Logo(
        response.shape,
        response.colour,
        response.text,
        response.textColour
      );
      logo.createSvgFile();
    });
}

// Call the function to initialize the app
init();
