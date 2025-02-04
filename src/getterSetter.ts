class Person1 {
    private _name: string;
  
    constructor(name: string) {
      this._name = name;
    }
  
    // Getter method
    public get name(): string {
      return this._name;
    }
  
    // Setter method
    public set name(newName: string) {
      if (newName.length > 0) {
        this._name = newName;
      } else {
        console.log("Name cannot be empty!");
      }
    }
  }
  
  const obj = new Person1("Alice");
  console.log(obj.name); // ✅ Calls the getter -> Output: Alice
  
  obj.name = "Bob"; // ✅ Calls the setter
  console.log(obj.name); // Output: Bob
  
  obj.name = ""; // ❌ Name cannot be empty!
  
  