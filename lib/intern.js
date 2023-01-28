const Employee = require('./employee.js')

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this._school = school;
    }

    get school() {
        return this._school;
    }

    get role() {
        return 'Intern';
    }
};

module.exports = Intern;