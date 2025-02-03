//this is alias for the type of the object
type Customer = {
    birthDay?: Date
}

//this function returns a customer object or null
function getCustomer(id:number) : Customer | null | undefined {
    return id === 0 ? null : {birthDay: new Date()}
}

//this id is 0 so the function returns null
let Customer = getCustomer(1)

// optainal property access operator will undefined if the object is null or undefined
console.log(Customer?.birthDay?.getFullYear())

// optional element access operator
// customers?.[0]?.birthDay?.getFullYear() // undefined

// optional call operator
let log: any = null
log?.(Customer)