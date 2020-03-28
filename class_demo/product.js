"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(n, q, p) {
        this.name = n;
        this.qty = q;
        this.price = p;
    }
    Product.prototype.set_discount = function (d) {
        this.discount = d;
    };
    Product.prototype.show_details = function () {
        console.log("name : ", this.name);
        console.log("qty : ", this.qty);
        console.log("price : ", this.price);
        var finalPrice = this.price * this.qty;
        if (this.discount != undefined) {
            console.log("discount : ", this.discount);
            finalPrice -= this.discount;
        }
        console.log("Final Price : ", finalPrice);
    };
    return Product;
}());
var obj = new Product("Pen", 20, 5);
obj.show_details();
console.log("-------------------");
var obj_2 = new Product("Board", 500, 5);
obj_2.set_discount(300);
obj_2.show_details();
