// let value: unknown;

// value = "Hello";
// value = 42;
// value = true;

// // ❌ Error: Can't directly use `unknown` type
// // console.log(value.toUpperCase()); 

// // ✅ Type narrowing using `typeof`
// if (typeof value === "string") {
//   console.log(value.toUpperCase()); // Safe to use
// }

// // ✅ Type assertion
// console.log((value as string).toUpperCase());

// class WordDocument {
//   toUpperCase() {
//     // Implementation here
//   }
// }

// function render(document: unknown) {
//   // Narrowing
//   if (document instanceof WordDocument) {
//     document.toUpperCase();
//   }
// }

let value: unknown = 'a'
if(typeof value === 'string'){
    console.log(value.toUpperCase())
}
console.log((value as string).toUpperCase())