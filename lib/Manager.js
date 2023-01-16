const { Employee } = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(employeeName, id, email);
        this._officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this._officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.export = { Manager };