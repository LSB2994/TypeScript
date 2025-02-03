"use strict";
let speed = null;
let ride = {
    //Falsy (undefined, null, 0, false, NaN, '')
    //nullish coalescing operator
    speed: speed !== null && speed !== void 0 ? speed : 10 //if speed is null or undefined, assign 10 to speed
};
console.log(ride.speed);
