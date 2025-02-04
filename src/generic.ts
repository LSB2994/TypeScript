class KeyValuePair<T, V> {
    constructor(public key: T, public value: V) { }

    static wrapInArray<T>(params:T){
        return [params];    
    }
}


let utils = KeyValuePair.wrapInArray(123);

let pair1 = new KeyValuePair<string,string>('1', 'First');
console.log(pair1.value.length);