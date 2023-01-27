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

class Engineer extends Employee {
    constructor(employeeName, id, email, gitHubUsername) {
        super(employeeName, id, email);
        this._gitHubUsername = gitHubUsername;
    }

    get gitHubUserName () {
        return this._gitHubUsername;
    }

    get role() {
        return 'Engineer'
    }
};

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

module.exports = { Employee, Manager, Engineer, Intern };
