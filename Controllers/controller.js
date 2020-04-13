"use strict";
/* ------------------------------global VARIABLES ------------------------------------- */
var rocket1;
var rocket2;
var engines1;
var displayRocket1 = document.querySelector("#displayRocket1");
var displayRocket2 = document.querySelector("#displayRocket2");
var infoRocket1 = document.querySelector("#infoRocket1");
var infoRocket2 = document.querySelector("#infoRocket2");
var alertInfo1 = document.querySelector("#alert1");
var alertInfo2 = document.querySelector("#alert2");
var rocket1TotalSpeed = document.querySelector("#rocket1TotalSpeed");
var rocket2TotalSpeed = document.querySelector("#rocket2TotalSpeed");
var displayTotalSpeed;
/* ------------------------------ global VARIABLES END ------------------------------------- */
/* ------------------ Creating Objects -------------------- */
function createRocket1() {
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    rocket1TotalSpeed.innerHTML = "";
    rocket1 = new Rocket("SFROET4");
    rocket1.addEngine(new Engine(10));
    rocket1.addEngine(new Engine(30));
    rocket1.addEngine(new Engine(80));
    displayRocket1.classList.replace("d-none", "d-flex");
    infoRocket1.innerHTML = "The rocket " + rocket1.name + " has " + rocket1.engines.length + " engines.";
}
;
function createRocket2() {
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
    infoRocket2.innerHTML = "The rocket " + rocket2.name + " has " + rocket2.engines.length + " engines.";
}
/* ------------------------------ Creating Objects END ------------------------------------- */
/* ------------------------------ FUNCTIONS ------------------------------------- */
function increaseSpeed(engines) {
    //reset all values before the loop
    var engineNum = 1;
    var totalSpeed = 0;
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    //checks every engine depending on the object as an argument
    engines.forEach(function (engine) {
        var maxSpeed = engine.maxSpeed;
        var speed = engine.speed;
        if (maxSpeed === speed) {
            var rocketAlert = "<div class=\"d-flex alert alert-danger\">\n            Engine <b> " + engineNum + " </b> MAX speed reached at <strong>" + maxSpeed + "</strong><br>\n            </div>";
            //Checks which rocket we should print the alert info to.
            if (engines.length == 3) {
                alertInfo1.classList.replace("d-none", "d-flex");
                alertInfo1.innerHTML += rocketAlert;
            }
            else if (engines.length == 6) {
                alertInfo2.classList.replace("d-none", "d-flex");
                alertInfo2.innerHTML += rocketAlert;
            }
        }
        else {
            engine.accelerate();
        }
        engineNum++;
        totalSpeed += engine.speed;
        console.log(totalSpeed);
    });
    // Checks where to print the value of total speed
    displayTotalSpeed = "The total speed is <strong>" + totalSpeed + "</strong>.";
    if (engines.length == 3) {
        rocket1TotalSpeed.innerHTML = displayTotalSpeed;
    }
    else if (engines.length == 6) {
        rocket2TotalSpeed.innerHTML = displayTotalSpeed;
    }
}
function decreaseSpeed(engines) {
    //reset all values before the loop
    var engineNum = 1;
    var totalSpeed = 0;
    alertInfo1.innerHTML = "";
    alertInfo2.innerHTML = "";
    //checks every engine depending on the object as an argument
    engines.forEach(function (engine) {
        var speed = engine.speed;
        if (speed <= 0) {
            var rocketAlert = "<div class=\"d-flex alert alert-danger\">\n            Engine <b> " + engineNum + " </b> reached its MIN speed\n            </div>";
            //Checks which rocket we should print the alert info to.
            if (engines.length == 3) {
                alertInfo1.classList.replace("d-none", "d-flex");
                alertInfo1.innerHTML += rocketAlert;
            }
            else if (engines.length == 6) {
                alertInfo2.classList.replace("d-none", "d-flex");
                alertInfo2.innerHTML += rocketAlert;
            }
        }
        else {
            engine.decelerate();
        }
        engineNum++;
        totalSpeed += engine.speed;
        console.log(totalSpeed);
    });
    // revisar donde se printea la info de acelerar ==> si en rocket 1 o en el 2
    displayTotalSpeed = "The total speed is <strong>" + totalSpeed + "</strong>.";
    if (engines.length === 3) {
        rocket1TotalSpeed.innerHTML = displayTotalSpeed;
    }
    else if (engines.length === 6) {
        rocket2TotalSpeed.innerHTML = displayTotalSpeed;
    }
}
/* ------------------------------ FUNCTIONS END ------------------------------------- */
