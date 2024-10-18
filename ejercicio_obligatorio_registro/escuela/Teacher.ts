import { Student } from "./Student";
export class Teacher {
    private name: string;
    private student: Student[];

    constructor(name: string) {
        this.name = name; 
        this.student = [];
    }

    addStudent(student: Student): void {
        this.student.push(student)
    }

    getStudent(): Student[] {
        return this.student;
    }

    
    getName(): string {
        return this.name;
    }
}