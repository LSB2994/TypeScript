"use strict";
class People {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
