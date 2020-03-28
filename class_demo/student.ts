// roll_no
// name
// marks[]
// calculate grade & percentage

class Student
{
    roll_no: number;
    name: string;
    marks: number[];
    grade: string;
    percentage: number;

    constructor(roll_no:number, name:string, marks:number[]){
        this.roll_no = roll_no;
        this.name = name;
        this.marks = marks;
    }

    show_details():void{
        console.log("Roll No. : ", this.roll_no);
        console.log("Name : ", this.name);
        console.log("Marks : ");
        for(let i:number = 0; i < this.marks.length; i++){
           console.log("Subject " + (i+1), this.marks[i]);
        }
    }

    calulate_percentage():void{
        let totalMarks = 0;
        for(let i:number = 0; i < this.marks.length; i++){
            totalMarks += this.marks[i];
        }
        this.percentage = (totalMarks/(this.marks.length*100)) * 100;
        console.log("Percentage : ", this.percentage);
    }

    show_grade():void{
        if(this.percentage >= 60){
            this.grade = "A";
        }
        else{
            this.grade = "B";
        }
        console.log("Grade : ", this.grade);
    }
}

let obj:Student = new Student(1, "Gaurav", [60, 80, 70]);
obj.show_details();
obj.calulate_percentage();
obj.show_grade();