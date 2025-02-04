class Person2{
    constructor(public name: string, public age: number){}

    get fullName(){
        return `${this.name} is ${this.age} years old`;
    }

    walk(){
        console.log(`${this.name} is walking`);
    }
}

class Student extends Person2{
    constructor(name: string, age: number, public grade: string){
        super(name, age);
    }

    study(){
        console.log(`${this.name} is studying`);
    }
}

class Teacher extends Person2{
    constructor(name: string, age: number, public subject: string){
        super(name, age);
    }

    override get fullName(){
        return `${this.name} is ${this.age} years old and teaches ${this.subject}`;
    }
}
let teacher = new Teacher('John Doe', 30, 'Math');
console.log(teacher.fullName); // John Doe is 30 years old