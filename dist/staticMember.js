"use strict";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activerides() {
        return Ride._activeRides;
    }
}
// passenger
// pickupLocation
// dropLocation
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activerides); //1
console.log(Ride.activerides); //1
