class People {
    constructor(public firstName: string,public lastName: string, public age: number) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}