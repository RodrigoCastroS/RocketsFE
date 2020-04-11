"use strict";
var Engine = /** @class */ (function () {
    function Engine(maxSpeed) {
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }
    Object.defineProperty(Engine.prototype, "getmaxSpeed", {
        get: function () {
            return this.maxSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "setMaxSpeed", {
        set: function (maxSpeed) {
            this.maxSpeed = maxSpeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "getSpeed", {
        get: function () {
            return this.speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Engine.prototype, "setSpeed", {
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Engine.prototype.accelerate = function () {
        this.speed += 10;
    };
    Engine.prototype.decelerate = function () {
        this.speed -= 10;
    };
    return Engine;
}());
