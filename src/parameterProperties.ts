class Person{
    constructor(private name: string, private age: number) {}
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails()); // Name: John Doe, Age: 30