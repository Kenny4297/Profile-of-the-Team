const { Employee } = require("./employee")

class Engineer extends Employee{
    constructor(gitHubUsername) {
        super(employeeName, id, email);
            this._gitHubUsername = gitHubUsername;
    }

    get gitHubUserName () {
        return this._gitHubUsername;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = { Engineer }