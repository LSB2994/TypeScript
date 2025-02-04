"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    static wrapInArray(params) {
        return [params];
    }
}
let utils = KeyValuePair.wrapInArray(123);
let pair1 = new KeyValuePair('1', 'First');
console.log(pair1.value.length);
