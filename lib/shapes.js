class Circle {
  constructor(colour) {
    this.cx = "125";
    this.cy = "125";
    this.r = "80";
    this.fill = colour;
  }

  generateElement() {
    this.shape = `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}"/>`;
  }
}

class Square {
  constructor(colour) {
    this.x = "40";
    this.y = "40";
    this.width = "125";
    this.height = "125";
    this.fill = colour;
  }

  generateElement() {
    this.shape = `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}"/>`;
  }
}

class Triangle {
  constructor(colour) {
    this.points = "137.5,50 225,200 50,200";
    this.fill = colour;
  }

  generateElement() {
    this.shape = `<polygon points="${this.points}" fill="${this.fill}"/>`;
  }
}

module.exports.Circle = Circle;
module.exports.Square = Square;
module.exports.Triangle = Triangle;
