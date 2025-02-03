"use strict";
let a = 5;
let b = 5;
let sum;
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            console.log(sum = a + b);
            return sum;
        case "subtract":
            console.log(sum = a - b);
            return sum;
        case "multiply":
            console.log(sum = a * b);
            return sum;
        case "divide":
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            console.log(sum = a / b);
            return sum;
        default:
            throw new Error("Invalid operation.");
    }
}
calculate(a, b, "add");
