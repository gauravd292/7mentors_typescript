export {}

class MyDate
{
    dd:number = 21;
    mm:number = 2;
    yy:number = 2020;

    constructor(d:number, m:number, y:number){
        console.log("In Constructor");
        this.dd = d;
        this.mm = m;
        this.yy = y;
    }

    setDate(d:number, m:number, y:number):void{
        this.dd = d;
        this.mm = m;
        this.yy = y;
    }

    printDate(): void{
        console.log(this.dd + " / " + this.mm + " / " + this.yy);
    }
}

let obj: MyDate = new MyDate(20, 2, 2020);
obj.printDate();
obj.setDate(22, 2, 2020);
obj.printDate();