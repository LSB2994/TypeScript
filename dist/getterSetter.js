"use strict";
class Person1 {
    constructor(name) {
        this._name = name;
    }
    // Getter method
    get name() {
        return this._name;
    }
    // Setter method
    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        }
        else {
            console.log("Name cannot be empty!");
        }
    }
}
const obj = new Person1("Alice");
console.log(obj.name); // ✅ Calls the getter -> Output: Alice
obj.name = "Bob"; // ✅ Calls the setter
console.log(obj.name); // Output: Bob
obj.name = ""; // ❌ Name cannot be empty!
