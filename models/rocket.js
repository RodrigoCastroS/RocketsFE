"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(name) {
        this.engines = new Array();
        this.name = name;
    }
    Rocket.prototype.addEngine = function (engine) {
        this.engines.push(engine);
    };
    return Rocket;
}());
