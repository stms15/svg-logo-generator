// Class specific to generating a circle
class Circle {
  constructor(colour) {
    this.shape = "circle";
    this.cx = "125";
    this.cy = "100";
    this.r = "80";
    this.fill = colour;
  }

  generateElement() {
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" stroke="black" stroke-width="1"/>`;
  }
}

// Class specific to generating a square
class Square {
  constructor(colour) {
    this.shape = "square";
    this.x = "50";
    this.y = "25";
    this.width = "150";
    this.height = "150";
    this.fill = colour;
  }

  generateElement() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" stroke="black" stroke-width="1"/>`;
  }
}

// Class specific to generating a Triangle
class Triangle {
  constructor(colour) {
    this.shape = "triangle";
    this.points = "125,25 225,175 25,175";
    this.fill = colour;
  }

  generateElement() {
    return `<polygon points="${this.points}" fill="${this.fill}" stroke="black" stroke-width="1"/>`;
  }
}

module.exports.Circle = Circle;
module.exports.Square = Square;
module.exports.Triangle = Triangle;
