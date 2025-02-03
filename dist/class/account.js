"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance.");
        }
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance is ${this.balance}.`);
    }
    display() {
        console.log(`Account ID: ${this.id}`);
        console.log(`Account Holder: ${this.owner}`);
        console.log(`Account Balance: ${this.balance}`);
    }
}
exports.Account = Account;
// Create account from user input
function createAccount() {
    console.log("\nCreate a new account:");
    const id = parseInt(prompt("Enter account ID: "));
    const owner = prompt("Enter owner name: ");
    const balance = parseFloat(prompt("Enter initial balance: "));
    if (isNaN(id) || isNaN(balance)) {
        throw new Error("Invalid input for ID or balance");
    }
    return new Account(id, owner, balance);
}
// Main program
function main() {
    console.log("Welcome to the bank!");
    try {
        const account = createAccount();
        while (true) {
            console.log("\nChoose an operation:");
            console.log("1. Deposit");
            console.log("2. Withdraw");
            console.log("3. Display Info");
            console.log("4. Exit");
            const choice = prompt("Enter your choice (1-4): ");
            switch (choice) {
                case '1':
                    const depositAmount = parseFloat(prompt("Enter deposit amount: "));
                    if (!isNaN(depositAmount)) {
                        account.deposit(depositAmount);
                    }
                    else {
                        console.log("Invalid amount!");
                    }
                    break;
                case '2':
                    const withdrawAmount = parseFloat(prompt("Enter withdrawal amount: "));
                    if (!isNaN(withdrawAmount)) {
                        try {
                            account.withdraw(withdrawAmount);
                        }
                        catch (error) {
                            if (error instanceof Error) {
                                console.log(error.message);
                            }
                            else {
                                console.log("Unknown error:", error);
                            }
                        }
                    }
                    else {
                        console.log("Invalid amount!");
                    }
                    break;
                case '3':
                    account.display();
                    break;
                case '4':
                    console.log("Exiting program...");
                    return;
                default:
                    console.log("Invalid choice!");
                    break;
            }
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
        else {
            console.log("Unknown error:", error);
        }
    }
}
// Run the program
console.log("Starting bank program...");
main();
