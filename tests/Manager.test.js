const {  Manager } = require('../lib/positions.js');
// import { Manager } from "../lib/positions";
//Manager Testing
test("Check to see if the 'get name()' getter returns the manager's name", () => {
    const manager = new Manager("John", 1, "john@example.com", 101);
    expect(manager.name).toBe("John")
})

test("Check to see if the 'get id()' getter returns the manager's id", () => {
    const manager = new Manager("John", 1, "john@example.com", 101);
    expect(manager.id).toBe(1);
})

test("Check to see if the 'get email()' getter returns the manager's email", () => {
    const manager = new Manager("John", 1, "john@example.com", 101);
    expect(manager.email).toEqual("john@example.com");
})

test("Check to see if the 'role' method returns 'Manager'", () => {
    const manager = new Manager("John", 1, "john@example.com", 101);
    expect(manager.role).toBe('Manager');
})
