class Engine{
     speed:number;
     maxSpeed:number;

    constructor(maxSpeed:number){
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }

    get getmaxSpeed(){
        return this.maxSpeed;
    }

    set setMaxSpeed(maxSpeed:number){
        this.maxSpeed = maxSpeed;
    }
    
    get getSpeed(){
        return this.speed;
    }

    set setSpeed(speed:number){
        this.speed = speed;
    }
    
    accelerate(){
       this.speed += 10;
    }

    decelerate(){
        this.speed -= 10;
    }


}
