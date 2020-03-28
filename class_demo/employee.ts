// Emp:
// id, name, basic sal, dept, 
// pf, hra, da, ppf --- fixed, 10 15 12 2
// contructor - 
// methods- calculate net sal, display emp_info

export {}

class Employee
{
    id:string;
    name:string;
    department:string;
    basic_salary:number;
    net_salary: number;

    //-- in percentage (number/100)
    pf:number = 0.10;
    hra:number = 0.15;
    da:number = 0.12;
    ppf:number = 0.02;

    constructor(id:string, name: string, dept: string, salary: number){
        this.id = id;
        this.name = name;
        this.department = dept;
        this.basic_salary = salary;
    }

    calculate_net_salary(): void{
        this.net_salary = 
            this.basic_salary + 
            (this.basic_salary * this.pf) +
            (this.basic_salary * this.hra) +
            (this.basic_salary * this.da) +
            (this.basic_salary * this.ppf);
    }

    display_emp_info():void{
        console.log("id : " + this.id);
        console.log("name : " + this.name);
        console.log("department : " + this.department);
        console.log("basic_salary : " + this.basic_salary);

        console.log("Pf : " + (this.basic_salary * this.pf));
        console.log("Hra : " + (this.basic_salary * this.hra));
        console.log("Da : " + (this.basic_salary * this.da));
        console.log("Ppf : " + (this.basic_salary * this.ppf));
        console.log("Net Salary : " + (this.net_salary));
    }

}

let obj:Employee = new Employee("GD001", "Gaurav", "Developement", 10000);
obj.calculate_net_salary();
obj.display_emp_info();


let objArray:Employee[] = [
    new Employee("001", "Sam", "Developement", 10000),
    new Employee("002", "John", "Testing", 25000),
    new Employee("003", "Smoth", "Marketing", 40000),
];
for(let i:number = 0; i < objArray.length; i++){
    console.log("---------------------------");
    objArray[i].calculate_net_salary();
    objArray[i].display_emp_info();
}