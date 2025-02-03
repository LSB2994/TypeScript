"use strict";
let employee = {
    name: "John",
    salary: 50000,
    work() {
        console.log(`${this.name} is working. His salary is ${this.salary}.`);
    }
};
employee.work();
