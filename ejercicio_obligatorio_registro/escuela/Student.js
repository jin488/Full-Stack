"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, note) {
        this.name = name;
        this.note = note;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.aprove = function () {
        if (this.note >= 7) {
            return true;
        }
        else {
            return false;
        }
    };
    Student.prototype.getNote = function () {
        return this.note;
    };
    return Student;
}());
exports.Student = Student;
