const { Employee, Manager, Engineer, Intern } = require('../lib/positions.js');
//Employee Testing
test("Check to see if the 'get name()' getter returns the employee name", () => {
    expect(Employee.employeeName).toBe(this._employeeName)
})

test("Check to see if the 'get id()' getter returns the employee id", () => {
    expect(Employee.id).toBe(this._id);
})

test("Check to see if the 'get email()' getter returns the employee email", () => {
    expect(Employee.email).toBe(this._email);
})

// const managerData = []; 
// const engineerData = [];
// const internData = [];

//Position Testing
test('Check to see if the office number is not a 0', () => {
    expect(Manager.officeNumber).not.toEqual(0);
})

test("Check to see if the 'role' method returns 'Manager'", () => {
    expect(Manager.role).toBe('Manager');
})

test("Check to see if the array  'managerData' contains a list of Manager class instances", () => {
    expect(managerData).toContain(?????);
})