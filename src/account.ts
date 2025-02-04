class acccout{
    readonly id : number;
    private _balance : number;
    owner : string;
    nickname? : string;

    constructor(id : number, balance : number, owner : string, nickname? : string){
        this.id = id;
        this._balance = balance;
        this.owner = owner;
        this.nickname = nickname;
    }

    deposit(amount: number):void{
        if(amount > 0){
            this._balance += amount;
        }
        throw new Error('Invalid amount');
    }

    calculateTax():number{
        return this._balance * 0.25;
    }

    getBalance():number{
        return this._balance;
    }
}
let account = new acccout(1, 100, 'John Doe');
console.log(account.getBalance()); //100