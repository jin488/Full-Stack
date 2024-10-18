"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(name) {
        this.name = name;
        this.student = [];
    }
    Teacher.prototype.addStudent = function (student) {
        this.student.push(student);
    };
    Teacher.prototype.getStudent = function () {
        return this.student;
    };
    Teacher.prototype.getName = function () {
        return this.name;
    };
    return Teacher;
}());
exports.Teacher = Teacher;
