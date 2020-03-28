export{}

import { Person } from './person';

  class Employee extends Person{
    emp_id: number;

    constructor( Name: string, Email: string, empId: number){
        super(Name, Email);
        this.emp_id = empId;
    }

    details():void{
        super.show_details();
        console.log("Eid : ", this.emp_id);
    }
}

let obj: Employee = new Employee("Sam", "sam@gmail.com", 1);
obj.details();  