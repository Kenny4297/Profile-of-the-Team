const Employee = require('./employee.js')

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this._officeNumber = officeNumber;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    get role() {
        return 'Manager'
    }
};

module.exports = { Manager }