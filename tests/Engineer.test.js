const { Engineer } = require('../lib/positions.js');
// import { Engineer } from "../lib/positions";
//Engineer Testing
test("Check to see if the 'get name()' getter returns the engineer's name", () => {
    const engineer = new Engineer("John", 1, "john@example.com", "johnGitHubRepository1123");
    expect(engineer.name).toBe("John")
})

test("Check to see if the 'get id()' getter returns the engineer's id", () => {
    const engineer = new Engineer("John", 1, "john@example.com", "johnGitHubRepository1123");
    expect(engineer.id).toBe(1);
})

test("Check to see if the 'get email()' getter returns the engineer's email", () => {
    const engineer = new Engineer("John", 1, "john@example.com", "johnGitHubRepository1123");
    expect(engineer.email).toEqual("john@example.com");
})

test("Check to see if the 'get gitHubUsername' method returns the engineer's Git Hub Username", () => {
    const engineer = new Engineer("John", 1, "john@example.com", "johnGitHubRepository1123");
    expect(engineer.gitHubUserName).toEqual("johnGitHubRepository1123");
})

test("Check to see if the 'role' method returns 'Engineer'", () => {
    const engineer = new Engineer("John", 1, "john@example.com", "johnGitHubRepository1123");
    expect(engineer.role).toBe('Engineer');
})