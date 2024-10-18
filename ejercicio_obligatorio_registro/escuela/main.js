"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student_1 = require("./Student");
var Teacher_1 = require("../Teacher");
var School_1 = require("../School");
// Crear alumnos 
var student1 = new Student_1.Student("Juan", 9);
var student2 = new Student_1.Student("Paco", 8);
var student3 = new Student_1.Student("Pedro", 7);
// Crear profes 
var teacher1 = new Teacher_1.Teacher("Karen");
var teacher2 = new Teacher_1.Teacher("Ale");
// alumnos que pertenecen a un profe 
teacher1.addStudent(student1);
teacher1.addStudent(student2);
teacher2.addStudent(student3);
//crear escuela 
var school = new School_1.School("Escuela Secundaria");
// inscripcion de alumnos a la escuela
school.enrrolStudent(student1);
school.enrrolStudent(student2);
school.enrrolStudent(student3);
// contratar profe 
school.hireTeacher(teacher1);
school.hireTeacher(teacher2);
// verificar si un alumno esta aprovado
console.log("".concat(student1.getName(), " is approved: ").concat(student1.aprove(), ", his grade is ").concat(student1.getNote()));
console.log("".concat(student2.getName(), " is approved: ").concat(student2.aprove()));
//ver lista de alumnos de la escuela
console.log("Alumnos en la escuela:", school.getStudent().map(function (student) { return student.getName(); }));
//desvincular alumnos de la escuela 
school.expelStudent("Juan");
console.log("Alumnos despues de expulsar a Juan:", school.getStudent().map(function (student) { return student.getName(); }));
//despedir a un profe 
school.dismissTeacher("Karen");
console.log("profes despues de expulsar a Karen:", school.getTeacher().map(function (teacher) { return teacher.getName(); }));
