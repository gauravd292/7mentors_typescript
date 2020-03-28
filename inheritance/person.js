"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(Name, Email) {
        this.name = Name;
        this.email = Email;
    }
    Person.prototype.show_details = function () {
        console.log("name", this.name);
        console.log("email", this.email);
    };
    return Person;
}());
exports.Person = Person;
