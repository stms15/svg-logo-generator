const inquirer = require("inquirer");
const Logo = require("./lib/logo");

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
