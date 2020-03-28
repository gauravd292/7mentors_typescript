export class Person
{
    name: string;
    email: string;

    constructor(Name:string, Email:string){
        this.name = Name;
        this.email = Email;
    }

    show_details(): void{
        console.log("name", this.name);
        console.log("email", this.email);
    }
}