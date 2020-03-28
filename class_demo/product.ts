export {}

class Product
{
    name:string;
    qty:number;
    price:number;
    discount:number;

    constructor(n:string, q:number, p:number){
        this.name = n;
        this.qty = q;
        this.price = p;
    }

    set_discount(d?:number){
        this.discount = d;
    }

    show_details():void{
        console.log("name : ", this.name);
        console.log("qty : ", this.qty);
        console.log("price : ", this.price);
        
        let finalPrice = this.price * this.qty;
        if(this.discount != undefined){
            console.log("discount : ", this.discount);
            finalPrice -= this.discount;
        }
        console.log("Final Price : ", finalPrice);
    }
}

let obj:Product = new Product("Pen", 20, 5);
obj.show_details();
console.log("-------------------");
let obj_2:Product = new Product("Board", 500, 5);
obj_2.set_discount(300);
obj_2.show_details();