"use strict";
class Calculator {
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b; // Adding numbers
        }
        else if (typeof a === 'string' && typeof b === 'string') {
            return a + b; // Concatenating strings
        }
        throw new Error('Invalid input');
    }
}
const calc = new Calculator();
// Works with numbers
console.log(calc.add(2, 3)); // 5
// Works with strings
console.log(calc.add("Hello, ", "World!")); // "Hello, World!"
// Error case: invalid type combination
// console.log(calc.add(2, "World")); // Throws error
