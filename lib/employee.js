class Employee {
    constructor(employeeName, id, email) {
        this._employeeName = employeeName;
        this._id = id;
        this._email = email;
    }

    get name() {
        return this._employeeName;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    get role() {
        return 'Employee'
    }
};

module.exports = Employee;