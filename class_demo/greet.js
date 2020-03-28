"use strict";
exports.__esModule = true;
var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.showMsg = function () {
        console.log("Good Afternoon");
    };
    return Greet;
}());
var obj = new Greet();
obj.showMsg();
