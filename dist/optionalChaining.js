"use strict";
var _a;
//this function returns a customer object or null
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
//this id is 0 so the function returns null
let Customer = getCustomer(1);
// optainal property access operator will undefined if the object is null or undefined
console.log((_a = Customer === null || Customer === void 0 ? void 0 : Customer.birthDay) === null || _a === void 0 ? void 0 : _a.getFullYear());
// optional element access operator
// customers?.[0]?.birthDay?.getFullYear() // undefined
// optional call operator
let log = null;
log === null || log === void 0 ? void 0 : log(Customer);
