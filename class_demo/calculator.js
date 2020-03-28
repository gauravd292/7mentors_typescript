"use strict";
exports.__esModule = true;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.prototype.sub = function (n1, n2) {
        return n1 - n2;
    };
    Calculator.prototype.mul = function (n1, n2) {
        return n1 * n2;
    };
    Calculator.prototype.div = function (n1, n2) {
        return n1 / n2;
    };
    return Calculator;
}());
var obj = new Calculator();
console.log("Add : ", obj.add(10, 5));
console.log("Sub : ", obj.sub(10, 5));
console.log("Mul : ", obj.mul(10, 5));
console.log("Div : ", obj.div(10, 5));
