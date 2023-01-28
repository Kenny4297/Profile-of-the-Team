const Employee = require('../lib/employee.js');

//Employee Testing
test("Check to see if the 'get name()' getter returns the Employee's name", () => {
    expect(Employee.employeeName).toBe(this._employeeName)
})

test("Check to see if the 'get id()' getter returns the Employee's id", () => {
    expect(Employee.id).toBe(this._id);
})

test("Check to see if the 'get email()' getter returns the employee's email", () => {
    expect(Employee.email).toBe(this._email);
})

test("Check to see if the 'role' method returns 'Engineer'", () => {
    const employee = new Employee("John", 1, "john@example.com");
    expect(employee.role).toBe('Employee');
})