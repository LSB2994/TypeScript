"use strict";
class acccout {
    constructor(id, balance, owner, nickname) {
        this.id = id;
        this._balance = balance;
        this.owner = owner;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
        throw new Error('Invalid amount');
    }
    calculateTax() {
        return this._balance * 0.25;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new acccout(1, 100, 'John Doe');
console.log(account.getBalance()); //100
