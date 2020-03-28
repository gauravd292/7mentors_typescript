export {}

console.log("If - Else ------- ");
let no:number = 16;
if(no === 0){
    console.log("Number is 0");
}
else{
    if(no%2 == 0){
        console.log("Even " + no);
    }
    else{
        console.log("Odd " + no);
    }
}

//-----------

console.log("For ------- : ");
no = 5;
let fact:number = 1;
for(let i:number =  1; i <= no; i++){
    fact = fact * i;
}
console.log("Factorial of "+ no +" is " + fact);

//-----------
let i:number = 1;

console.log("While ------ : ");
fact = 1;
no = 5;
while(i <= no){
    fact = fact * i;
    i++;
}
console.log("Factorial of "+ no +" is " + fact);

//-----------

i = 1;
console.log("Do while : ");
do{
    console.log(i);
    i++;
}
while(i <= 10);