"use strict";
exports.__esModule = true;
console.log("If - Else ------- ");
var no = 16;
if (no === 0) {
    console.log("Number is 0");
}
else {
    if (no % 2 == 0) {
        console.log("Even " + no);
    }
    else {
        console.log("Odd " + no);
    }
}
//-----------
console.log("For ------- : ");
no = 5;
var fact = 1;
for (var i_1 = 1; i_1 <= no; i_1++) {
    fact = fact * i_1;
}
console.log("Factorial of " + no + " is " + fact);
//-----------
var i = 1;
console.log("While ------ : ");
fact = 1;
no = 5;
while (i <= no) {
    fact = fact * i;
    i++;
}
console.log("Factorial of " + no + " is " + fact);
//-----------
i = 1;
console.log("Do while : ");
do {
    console.log(i);
    i++;
} while (i <= 10);
