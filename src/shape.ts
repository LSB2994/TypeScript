abstract class Shape {
    constructor(public color: string) {}

    // abstract method can only be defined in abstract class
    // so if you remove abstract keyword from render method, it will give an error
    abstract render(): void;
}

class Circle extends Shape{
    constructor(color: string, public radius: number){
        super(color);
    }

    override render():void{
        console.log(`Circle with radius ${this.radius} and color ${this.color}`);
    }
}

let shape = new Circle("red", 5);
// this is really make sense, we should not be able to call render method on shape object, because it is not implemented in Shape class
shape.render();