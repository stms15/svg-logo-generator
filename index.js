// const inquirer = require("inquirer");
const Shapes = require("./lib/shapes");

tri = new Shapes.Triangle("orange");
tri.generateElement();
console.log(tri.shape);
