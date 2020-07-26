const { v4 } = require("uuid");

module.exports = class Student {
    constructor(firstName, lastName, age, grades, teacherId, id = v4()) {
    this.firstName = firstName,
    this.lastName - lastName,
    this.age = age,
    this.grades = grades,
    this.teacherId = teacherId,
    this.id = id
    };
}