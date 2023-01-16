const { Employee } = require("./employee");

class Intern extends Employee{
    constructor(school) {
        super(employeeName, id, email);
        this._school = school;
    }

    getSchool() {
        return this._school;
    }

    getRole() {
         return 'Intern';
    }
}

module.exports = { Intern };