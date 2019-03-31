var car = /** @class */ (function () {
    /* speed:number
    rpm:number
    brand:string

    constructor(speed:number, rpm:number, brand:string){
        this.speed = speed
        this.rpm = rpm
        this.brand = brand
    } */
    function car(speed, rpm, brand) {
        this.speed = speed;
        this.rpm = rpm;
        this.brand = brand;
    }
    car.prototype.speedUp = function () {
        return this.speed = this.rpm += 10;
    };
    car.prototype.whatsBrnad = function () {
    };
    return car;
}());
var cr = new car(100, 10, 'BMW');
console.log(cr.speedUp());
