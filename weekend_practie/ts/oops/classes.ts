export class car{
    /* speed:number
    rpm:number
    brand:string

    constructor(speed:number, rpm:number, brand:string){
        this.speed = speed
        this.rpm = rpm
        this.brand = brand
    } */

    constructor( 
        private speed?:number, 
        private rpm?:number, 
        private brand?:string
    ){}

    speedUp(): any{
        return this.speed = this.rpm += 10
    }

    whatsBrnad(){

    }
}

let cr = new car(100,10, 'BMW')

console.log( cr.speedUp())