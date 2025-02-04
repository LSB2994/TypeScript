"use strict";
class Teacher1 extends People {
    get fullName() {
        return 'Teacher: ' + super.fullName;
    }
}
function printNames(persons) {
    // for(let person of persons)
    //  
    //    console.log(person.name);
    persons.forEach(person => console.log(person.firstName));
    console.log('-------------------');
}
printNames([new People('John', 'Doe', 30), new Teacher1('Jane', 'Doe', 28)]);
