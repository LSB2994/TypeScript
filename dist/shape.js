"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Circle with radius ${this.radius} and color ${this.color}`);
    }
}
let shape = new Circle("red", 5);
// this is really make sense, we should not be able to call render method on shape object, because it is not implemented in Shape class
shape.render();
