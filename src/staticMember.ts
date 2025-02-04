class Ride{
    // passenger
    // pickupLocation
    // dropLocation

    private static _activeRides: number = 0;
    start(){Ride._activeRides++;}
    stop(){Ride._activeRides--;}

    static get activerides(){
        return Ride._activeRides;
    }
}
let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activerides); //1
console.log(Ride.activerides); //1
