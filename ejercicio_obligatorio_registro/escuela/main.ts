import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { School } from "./School";


// Crear alumnos 
const student1 = new Student("Juan", 9);
const student2 = new Student("Paco", 8);
const student3 = new Student("Pedro", 7);


// Crear profes 
const teacher1 = new Teacher("Karen");
const teacher2 = new Teacher("Ale");

// alumnos que pertenecen a un profe 
teacher1.addStudent(student1);
teacher1.addStudent(student2);

teacher2.addStudent(student3);
//crear escuela 
const school = new School("Escuela Secundaria");

// inscripcion de alumnos a la escuela
school.enrrolStudent(student1);
school.enrrolStudent(student2);
school.enrrolStudent(student3);

// contratar profe 
school.hireTeacher(teacher1);
school.hireTeacher(teacher2);

// verificar si un alumno esta aprovado
console.log(`${student1.getName()} is approved: ${student1.aprove()}, his grade is ${student1.getNote()}`);

console.log(`${student2.getName()} is approved: ${student2.aprove()}`);

//ver lista de alumnos de la escuela
console.log("Alumnos en la escuela:", school.getStudent().map(student => student.getName()));

//desvincular alumnos de la escuela 
school.expelStudent("Juan");
console.log("Alumnos despues de expulsar a Juan:", school.getStudent().map(student => student.getName()));


//despedir a un profe 
school.dismissTeacher("Karen");
console.log("profes despues de expulsar a Karen:", school.getTeacher().map(teacher => teacher.getName()));


