"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var person_1 = require("./person");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(Name, Email, empId) {
        var _this = _super.call(this, Name, Email) || this;
        _this.emp_id = empId;
        return _this;
    }
    Employee.prototype.details = function () {
        _super.prototype.show_details.call(this);
        console.log("Eid : ", this.emp_id);
    };
    return Employee;
}(person_1.Person));
var obj = new Employee("Sam", "sam@gmail.com", 1);
obj.details();
