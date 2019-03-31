import {car} from './classes'
class Bmw extends car implements GpsTracker {
    control(){

    }
    trackMe(){
        
    }
}

let bw = new Bmw()
bw.control()

interface GpsTracker{
    trackMe()
}