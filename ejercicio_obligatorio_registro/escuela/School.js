"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
var School = /** @class */ (function () {
    function School(name, studentList, teacherList) {
        this.name = name;
        if (studentList != undefined) {
            this.student = studentList;
        }
        else {
            this.student = [];
        }
        if (teacherList != undefined) {
            this.teacher = teacherList;
        }
        else {
            this.teacher = [];
        }
    }
    School.prototype.getName = function () {
        return this.name;
    };
    School.prototype.enrrolStudent = function (student) {
        this.student.push(student);
    };
    School.prototype.hireTeacher = function (teacher) {
        this.teacher.push(teacher);
    };
    School.prototype.expelStudent = function (name) {
        this.student = this.student.filter(function (student) { return student.getName() !== name; });
    };
    School.prototype.dismissTeacher = function (name) {
        this.teacher = this.teacher.filter(function (teacher) { return teacher.getName() !== name; });
    };
    School.prototype.getStudent = function () {
        return this.student;
    };
    School.prototype.getTeacher = function () {
        return this.teacher;
    };
    return School;
}());
exports.School = School;
