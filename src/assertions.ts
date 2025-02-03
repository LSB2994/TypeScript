//using 'as' keyword
let phone = document.getElementById("phone") as HTMLInputElement;
//HTMLElement is a type of phone
//HTMLInputElement is a type of phone
phone.value

//using angle brackets
let phone2 = <HTMLInputElement> document.getElementById("phone");
phone2.value