const Employee = require('./employee.js')

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

module.exports = { Engineer }