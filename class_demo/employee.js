"use strict";
// Emp:
// id, name, basic sal, dept, 
// pf, hra, da, ppf --- fixed, 10 15 12 2
// contructor - 
// methods- calculate net sal, display emp_info
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(id, name, dept, salary) {
        //-- in percentage (number/100)
        this.pf = 0.10;
        this.hra = 0.15;
        this.da = 0.12;
        this.ppf = 0.02;
        this.id = id;
        this.name = name;
        this.department = dept;
        this.basic_salary = salary;
    }
    Employee.prototype.calculate_net_salary = function () {
        this.net_salary =
            this.basic_salary +
                (this.basic_salary * this.pf) +
                (this.basic_salary * this.hra) +
                (this.basic_salary * this.da) +
                (this.basic_salary * this.ppf);
    };
    Employee.prototype.display_emp_info = function () {
        console.log("id : " + this.id);
        console.log("name : " + this.name);
        console.log("department : " + this.department);
        console.log("basic_salary : " + this.basic_salary);
        console.log("Pf : " + (this.basic_salary * this.pf));
        console.log("Hra : " + (this.basic_salary * this.hra));
        console.log("Da : " + (this.basic_salary * this.da));
        console.log("Ppf : " + (this.basic_salary * this.ppf));
        console.log("Net Salary : " + (this.net_salary));
    };
    return Employee;
}());
var obj = new Employee("GD001", "Gaurav", "Developement", 10000);
obj.calculate_net_salary();
obj.display_emp_info();
var objArray = [
    new Employee("001", "Sam", "Developement", 10000),
    new Employee("002", "John", "Testing", 25000),
    new Employee("003", "Smoth", "Marketing", 40000),
];
for (var i = 0; i < objArray.length; i++) {
    console.log("---------------------------");
    objArray[i].calculate_net_salary();
    objArray[i].display_emp_info();
}
