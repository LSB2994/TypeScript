// function reject(message: string) {
//     throw new Error(message);
// }

// function processEvents(): never { // Correct spelling
//     while (true) {
//         console.log('Processing events');
//     }
// }

// reject('Something went wrong'); // Throws an error
// processEvents(); // Infinite loop
// console.log('This line will never be reached'); // Never reached

// type Shape = "circle" | "square" | "triangle";

// function getArea(shape: Shape): number {
//   switch (shape) {
//     case "circle": return 1;
//     case "square": return 2/* ... */;
//     case "triangle": return 3 /* ... */;
//     default:
//       // TypeScript infers `shape` is `never` here if all cases are covered.
//       const exhaustiveCheck: never = shape;
//       return exhaustiveCheck;
//   }
// }
// console.log(getArea("circle")); // Returns 1

// function assertNever(x: never): never {
function impossible(x: string | number) {
    if (typeof x === "string") {
      // x is 'string' here
      console.log(x);
      
    } else if (typeof x === "number") {
      // x is 'number' here
        console.log(x);
    } else {
        console.log(x);
        
      // x is 'never' here (no possible type left)
    }
  }
  console.log(impossible("Hello"));