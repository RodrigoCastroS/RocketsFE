"use strict";
var rocket1;
var rocket2;
var engines1;
var displayRocket1 = document.querySelector("#displayRocket1");
var displayRocket2 = document.querySelector("#displayRocket2");
var infoRocket1 = document.querySelector("#infoRocket1");
var infoRocket2 = document.querySelector("#infoRocket2");
function createRocket1() {
    rocket1 = new Rocket("SFROET4");
    rocket1.addEngine(new Engine(10));
    rocket1.addEngine(new Engine(30));
    rocket1.addEngine(new Engine(80));
    displayRocket1.classList.remove("d-none");
    infoRocket1.innerHTML = "The rocket " + rocket1.name + " has " + rocket1.engines.length + " engines.";
}
;
function createRocket2() {
    rocket2 = new Rocket("JDKF93S");
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(40));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(10));
}
function increaseSpeed(engines) {
    var engineNum = 1;
    var totalSpeed = 0;
    // infoRocket1.innerHTML = "";
    engines.forEach(function (engine) {
        var maxSpeed = engine.maxSpeed;
        var speed = engine.speed;
        if (maxSpeed === speed) {
            console.log("Engine " + engineNum + " MAX speed reached");
        }
        else {
            engine.accelerate();
            totalSpeed += engine.speed;
        }
        engineNum++;
        console.log(totalSpeed);
    });
    infoRocket1.innerHTML += " Total speed is " + totalSpeed;
}
function decreaseSpeed(engines) {
    var engineNum = 1;
    var totalSpeed;
    engines.forEach(function (engine) {
        var maxSpeed = engine.maxSpeed;
        var speed = engine.speed;
        totalSpeed += speed;
        if (speed <= 0) {
            console.log("Engine " + engineNum + " MIN speed reached");
        }
        else {
            engine.decelerate();
        }
        engineNum++;
        console.log(totalSpeed);
    });
}
// rocket1.engines.forEach(engine => console.log(engine.speed));
function display() {
    console.log("rocket1 engine1 speed: " + rocket1.engines[0].getSpeed);
    console.log("rocket1 engine2 speed: " + rocket1.engines[1].getSpeed);
    console.log("rocket1 engine3 speed: " + rocket1.engines[2].getSpeed);
    console.log("TOTAL SPEED: " + (rocket1.engines[0].speed + rocket1.engines[1].speed + rocket1.engines[2].speed));
}
;
// rocket1.engines.forEach(engine => engine.decelerate());
