export {}

class Greet
{
    showMsg(): void{
        console.log("Good Afternoon");
    }
}

let obj: Greet = new Greet();
obj.showMsg();