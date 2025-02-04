"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get fullName() {
        return `${this.name} is ${this.age} years old`;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}
class Student extends Person2 {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}
class Teacher extends Person2 {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    get fullName() {
        return `${this.name} is ${this.age} years old and teaches ${this.subject}`;
    }
}
let teacher = new Teacher('John Doe', 30, 'Math');
console.log(teacher.fullName); // John Doe is 30 years old
