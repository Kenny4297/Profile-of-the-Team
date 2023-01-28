const Intern = require('../lib/intern.js');
//Intern Testing
test("Check to see if the 'get name()' getter returns the intern's name", () => {
    const intern = new Intern("John", 1, "john@example.com", "John Hopkins");
    expect(intern.name).toBe("John")
})

test("Check to see if the 'get id()' getter returns the intern's id", () => {
    const intern = new Intern("John", 1, "john@example.com", "John Hopkins");
    expect(intern.id).toBe(1);
})

test("Check to see if the 'get email()' getter returns the intern's email", () => {
    const intern = new Intern("John", 1, "john@example.com", "John Hopkins");
    expect(intern.email).toEqual("john@example.com");
})

test("Check to see if the 'get school' method returns the intern's school", () => {
    const intern = new Intern("John", 1, "john@example.com", "John Hopkins");
    expect(intern.school).toEqual("John Hopkins");
})

test("Check to see if the 'role' method returns 'Intern'", () => {
    const intern = new Intern("John", 1, "john@example.com", "John Hopkins");
    expect(intern.role).toBe('Intern');
})