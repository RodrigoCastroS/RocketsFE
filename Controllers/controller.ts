/* ------------------------------global VARIABLES ------------------------------------- */
let rocket1: Rocket;
let rocket2: Rocket;
let engines1: Engine;

let displayRocket1 = document.querySelector("#displayRocket1") as HTMLHeadElement;
let displayRocket2 = document.querySelector("#displayRocket2") as HTMLHeadElement;
let infoRocket1 = document.querySelector("#infoRocket1") as HTMLHeadElement;
let infoRocket2 = document.querySelector("#infoRocket2") as HTMLHeadElement;
let alertInfo1 = document.querySelector("#alert1") as HTMLElement;
let alertInfo2 = document.querySelector("#alert2") as HTMLElement;
let rocket1TotalSpeed = document.querySelector("#rocket1TotalSpeed") as HTMLHeadElement;
let rocket2TotalSpeed = document.querySelector("#rocket2TotalSpeed") as HTMLHeadElement;
let displayTotalSpeed: string;
/* ------------------------------ global VARIABLES END ------------------------------------- */



/* ------------------ Creating Objects -------------------- */
function createRocket1(){
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    rocket1TotalSpeed.innerHTML = "";
    rocket1 = new Rocket("SFROET4");
    rocket1.addEngine(new Engine(10));
    rocket1.addEngine(new Engine(30));
    rocket1.addEngine(new Engine(80));
    
    displayRocket1.classList.replace("d-none", "d-flex");
    infoRocket1.innerHTML = "The rocket "+ rocket1.name + " has " + rocket1.engines.length + " engines.";  
};

function createRocket2(){
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    rocket2TotalSpeed.innerHTML = "";
    rocket2 = new Rocket("JDKF93S");
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(40));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(10));
    
    displayRocket2.classList.replace("d-none", "d-flex");
    infoRocket2.innerHTML = "The rocket "+ rocket2.name + " has " + rocket2.engines.length + " engines.";  
}
/* ------------------------------ Creating Objects END ------------------------------------- */


/* ------------------------------ FUNCTIONS ------------------------------------- */

function increaseSpeed(engines:any){
    //reset all values before the loop
    let engineNum = 1;
    let totalSpeed = 0;
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    //checks every engine depending on the object as an argument
    engines.forEach(function(engine:Engine){
        let maxSpeed = engine.maxSpeed;
        let speed = engine.speed;
        if(maxSpeed === speed){
            let rocketAlert = `<div class="d-flex alert alert-danger">
            Engine <b> ${engineNum} </b> MAX speed reached at <strong>${maxSpeed}</strong><br>
            </div>`;
            //Checks which rocket we should print the alert info to.
            if(engines.length == 3){
                alertInfo1.classList.replace("d-none", "d-flex");
                alertInfo1.innerHTML += rocketAlert;
            }else if(engines.length == 6){
                alertInfo2.classList.replace("d-none", "d-flex");
                alertInfo2.innerHTML += rocketAlert;
            }
        }else{
            engine.accelerate();
        }
        engineNum++;
        totalSpeed += engine.speed;
        console.log(totalSpeed);
    });
    
    // Checks where to print the value of total speed
    displayTotalSpeed = `The total speed is <strong>${totalSpeed}</strong>.`;
    if(engines.length == 3){
        rocket1TotalSpeed.innerHTML = displayTotalSpeed;
    }else if(engines.length == 6){
        rocket2TotalSpeed.innerHTML = displayTotalSpeed;
    }
    
} 

function decreaseSpeed(engines:any){
    //reset all values before the loop
    let engineNum = 1;
    let totalSpeed = 0;
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    //checks every engine depending on the object as an argument
    engines.forEach(function(engine:Engine){
        let speed = engine.speed;
        if(speed <= 0 ){
            let rocketAlert = `<div class="d-flex alert alert-danger">
            Engine <b> ${engineNum} </b> reached its MIN speed
            </div>`;
            //Checks which rocket we should print the alert info to.
            if(engines.length == 3){
                alertInfo1.classList.replace("d-none", "d-flex");
                alertInfo1.innerHTML += rocketAlert;
            }else if(engines.length == 6){
                alertInfo2.classList.replace("d-none", "d-flex");
                alertInfo2.innerHTML += rocketAlert;
            }
        }else{
            engine.decelerate();
        }
        engineNum++;
        totalSpeed += engine.speed;
        console.log(totalSpeed);
    });
    // revisar donde se printea la info de acelerar ==> si en rocket 1 o en el 2
    displayTotalSpeed =`The total speed is <strong>${totalSpeed}</strong>.`;
    if(engines.length === 3){
        rocket1TotalSpeed.innerHTML = displayTotalSpeed;
    }else if(engines.length === 6){
        rocket2TotalSpeed.innerHTML = displayTotalSpeed;
    }
    
} 

/* ------------------------------ FUNCTIONS END ------------------------------------- */
