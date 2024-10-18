import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
    private name: string;
    private student: Student[];
    private teacher: Teacher[];

    constructor(name: string, studentList?: Student[], teacherList?: Teacher[]) {
        this.name = name; 

        if (studentList != undefined){
            this.student = studentList;
        } else {
            this.student = [];
        }
        if (teacherList != undefined){
            this.teacher = teacherList;
        } else {
            this.teacher = [];
        }
    }

    getName(): string {
        return this.name
    }


    enrrolStudent(student: Student): void{
        this.student.push(student);
    }

    hireTeacher(teacher: Teacher): void{
        this.teacher.push(teacher);
    }

    expelStudent(name: string): void {
        this.student = this.student.filter(student => student.getName() !== name);
    }

    dismissTeacher(name: string): void {
        this.teacher = this.teacher.filter(teacher => teacher.getName() !== name);
    }

    getStudent(): Student[] {
        return this.student;
    }

    getTeacher(): Teacher[] {
        return this.teacher;
    }
}