const { writeFileSync, readFileSync} = require("fs");

module.exports = class StudentDataLayer {
    constructor(filePath) {
        this.filePath = filePath;
    }
}

