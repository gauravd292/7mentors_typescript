// roll_no
// name
// marks[]
// calculate grade & percentage
var Student = /** @class */ (function () {
    function Student(roll_no, name, marks) {
        this.roll_no = roll_no;
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.show_details = function () {
        console.log("Roll No. : ", this.roll_no);
        console.log("Name : ", this.name);
        console.log("Marks : ");
        for (var i = 0; i < this.marks.length; i++) {
            console.log("Subject " + (i + 1), this.marks[i]);
        }
    };
    Student.prototype.calulate_percentage = function () {
        var totalMarks = 0;
        for (var i = 0; i < this.marks.length; i++) {
            totalMarks += this.marks[i];
        }
        this.percentage = (totalMarks / (this.marks.length * 100)) * 100;
        console.log("Percentage : ", this.percentage);
    };
    Student.prototype.show_grade = function () {
        if (this.percentage >= 60) {
            this.grade = "A";
        }
        else {
            this.grade = "B";
        }
        console.log("Grade : ", this.grade);
    };
    return Student;
}());
var obj = new Student(1, "Gaurav", [60, 80, 70]);
obj.show_details();
obj.calulate_percentage();
obj.show_grade();
