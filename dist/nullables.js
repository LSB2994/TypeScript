"use strict";
// Run: deno run src/nullables.ts
function greet(name) {
    //narrowing
    if (name) {
        //name is not null or undefined
        console.log(`Hello, ${name.toUpperCase}!`);
    }
    //name is null or undefined
    else {
        //name is null or undefined
        console.log('Hola!');
    }
}
//greet('') assigns undefined to name
greet(undefined);
