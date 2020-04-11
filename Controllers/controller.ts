
let rocket1: Rocket;
let rocket2: Rocket;
let engines1: Engine;

let displayRocket1 = document.querySelector("#displayRocket1") as HTMLHeadElement;
let displayRocket2 = document.querySelector("#displayRocket2") as HTMLHeadElement;
let infoRocket1 = document.querySelector("#infoRocket1") as HTMLHeadElement;
let infoRocket2 = document.querySelector("#infoRocket2") as HTMLHeadElement;
let displayTotalSpeed = document.querySelector("#displayTotalSpeed") as HTMLHeadElement;
let totalSpeed: number = 0;

function createRocket1(){
    rocket1 = new Rocket("SFROET4");
    rocket1.addEngine(new Engine(10));
    rocket1.addEngine(new Engine(30));
    rocket1.addEngine(new Engine(80));

    displayRocket1.classList.replace("d-none", "d-flex");
    infoRocket1.innerHTML = "The rocket "+ rocket1.name + " has " + rocket1.engines.length + " engines. The total speed is " + totalSpeed;  
};

function createRocket2(){
    rocket2 = new Rocket("JDKF93S");
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(40));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(10));
}


function increaseSpeed(engines:any){
    let engineNum = 1;
    // let totalSpeed = 0;
    // infoRocket1.innerHTML = "";
    engines.forEach(function(engine:Engine){
        let maxSpeed = engine.maxSpeed;
        let speed = engine.speed;
        if(maxSpeed === speed){
            let alert = document.createElement("div");
            alert.className = "alert alert-danger";
            alert.innerHTML = "Engine "+ engineNum +" MAX speed reached";
            infoRocket1.appendChild(alert);

            // console.log("Engine "+ engineNum +" MAX speed reached");

        }else{
            engine.accelerate();
        }
        engineNum++;
        totalSpeed += engine.speed;
        console.log(totalSpeed);
    });
   
    // const infoTotalSpeed = document.createElement("div");
    // infoTotalSpeed.textContent = " Total speed is "+ totalSpeed;
    // infoRocket1.appendChild(infoTotalSpeed); 
    // infoRocket1.innerHTML = totalSpeed;
} 

function decreaseSpeed(engines:any){
    let engineNum = 1;
    let totalSpeed:number;
    engines.forEach(function(engine:Engine){
        let maxSpeed = engine.maxSpeed;
        let speed = engine.speed;
        totalSpeed += speed;
        if(speed <= 0 ){
            console.log("Engine "+ engineNum +" MIN speed reached");
            
        }else{
            engine.decelerate();
        }
        engineNum++;
        console.log(totalSpeed);
    });
    
} 

// rocket1.engines.forEach(engine => console.log(engine.speed));
function display(){ 
    console.log("rocket1 engine1 speed: " + rocket1.engines[0].getSpeed);
    console.log("rocket1 engine2 speed: " + rocket1.engines[1].getSpeed);
    console.log("rocket1 engine3 speed: " + rocket1.engines[2].getSpeed);

    console.log("TOTAL SPEED: "+ (rocket1.engines[0].speed + rocket1.engines[1].speed + rocket1.engines[2].speed));
    
};
 
 
// rocket1.engines.forEach(engine => engine.decelerate());