"use strict";
exports.__esModule = true;
var MyDate = /** @class */ (function () {
    function MyDate(d, m, y) {
        this.dd = 21;
        this.mm = 2;
        this.yy = 2020;
        console.log("In Constructor");
        this.dd = d;
        this.mm = m;
        this.yy = y;
    }
    MyDate.prototype.setDate = function (d, m, y) {
        this.dd = d;
        this.mm = m;
        this.yy = y;
    };
    MyDate.prototype.printDate = function () {
        console.log(this.dd + " / " + this.mm + " / " + this.yy);
    };
    return MyDate;
}());
var obj = new MyDate(20, 2, 2020);
obj.printDate();
obj.setDate(22, 2, 2020);
obj.printDate();
