export {}

class Calculator
{
    add(n1: number, n2:number): number{
        return n1 + n2;
    }

    sub(n1: number, n2:number): number{
        return n1 - n2;
    }

    mul(n1: number, n2:number): number{
        return n1 * n2;
    }

    div(n1: number, n2:number): number{
        return n1 / n2;
    }
}

let obj: Calculator = new Calculator();
console.log( "Add : ", obj.add(10, 5) );
console.log( "Sub : ", obj.sub(10, 5) );
console.log( "Mul : ", obj.mul(10, 5) );
console.log( "Div : ", obj.div(10, 5) );
