export {}

var output: any;

//-------------------------------------------

function greet(): void{
    console.log("Hello");
}
greet();

//-------------------------------------------

function greetPerson(personName:string): string{
    let out = "Hello " + personName;
    return out;
}
output = greetPerson("X-Man");
console.log(output);

//-------------------------------------------

function add(n1: number, n2:number): number{
    let addition: number = 0;
    addition = n1 + n2;
    return addition;
}
output = add(5, 4);
console.log(output);

//-------------------------------------------

function getLength(str: string):number{
    return str.length;
}
output = getLength("YourName");
console.log(output);

//-------------------------------------------

function getReverse(str: string):string{
    let newString: string = "";
    for(let i:number = str.length - 1; i >= 0; i--){
        newString = newString + str[i];
    }
    return newString;
}
output = getReverse("YourName");
console.log(output);

//-------------------------------------------

function isPalimdrome(str: string):boolean{
    let status:boolean = false;
    let newString: string = getReverse(str);
    status = (str == newString);
    return status;
}
output = isPalimdrome("DADt");
console.log(output);

//-------------------------------------------

function calculateResult(
    rollNo:number,
    name:string,
    divName:string,
    m1:number,
    m2:number,
    m3:number
    ): void{
        console.log("Name. : " + name);
        console.log("Roll No. : " + rollNo);
        console.log("Division : " + divName);
        let totalMarks: number = m1 + m2 + m3;
        console.log("Total : " + totalMarks);
        let percentage: number = (totalMarks/300) * 100;
        console.log("Percentage : " + percentage);
        let grade: string = (percentage > 60) ? "A" : "B";
        console.log("Grade : " + grade);
}
calculateResult(1, "Student", "D", 70, 60, 80);

//-------------------------------------------

//--- used for config purpose
function addDefaultParam(n1: number = 4, n2:number = 5): void{
    console.log(n1 + n2);
}
addDefaultParam();
addDefaultParam(8, 4);

//--- optional param
function calculate(pi:number, name:string, price: number, discount?:number):void{
    console.log(pi);
    console.log(name);
    console.log(price);
    console.log(discount);
    
    let bill:number = 0;

    if(discount == undefined){
        bill = price;
    }
    else{
        bill = price - discount;
    }
    
    console.log(bill);
}

calculate(1, "Demo", 50, 5);
calculate(1, "Demo", 50);


/*
function validateDate(d:number, m:number, y:number): boolean{
    let isValid = true;

    let isLeapYear = (y%4 == 0);

    if(m > 0 && m <= 12){

        if(m == 2){
            if(isLeapYear && (d < 0 || d > 29) ){
                isValid = false;
            }
            else{
                if(!isLeapYear && (d < 0 || d > 28) ){
                    isValid = false;
                }
            }
        }
        else{
            if(
                (
                    m == 1 ||
                    m == 3 ||
                    m == 5 ||
                    m == 7 ||
                    m == 8 ||
                    m == 10 ||
                    m == 12
                ) && (d < 0 || d > 31)
            ){}
        }

    }
    else{
        isValid = false;
    }

    return isValid;
}
*/