class Employee {
    constructor(employeeName, id, email) {
        this._employeeName = employeeName;
        this._id = id;
        this._email = email;
    }

    getName() {
        return this._employeeName;
    }

    getId() {
        return this._id;
    }

    getEmail() {
        return this._email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = { Employee }