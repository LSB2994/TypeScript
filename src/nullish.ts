let speed : number | null = null

let ride = {

    //Falsy (undefined, null, 0, false, NaN, '')
    //nullish coalescing operator
    speed: speed ?? 10 //if speed is null or undefined, assign 10 to speed
}
console.log(ride.speed);

