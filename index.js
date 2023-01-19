const inquirer = require('inquirer');
const fs = require('fs');


//Creating the questions for building the team
const questions = [
    //The question for the user
    //Team manager
    {
        type: 'input',
        name: 'managerName', 
        message: "What is the manager name?",
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the manager name!'
            }
            return true
        }   
    },

    {
        type: 'input',
        name: 'managerId',
        message: "Enter the manager's id:",
        validate: (response) => {
            if (response === (NaN) && response !== '') {
                return 'Sorry! Please give me the manager id. Use numbers, no characters allowed'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter the managers's email:",
        validate: (response) => {
            // here we use a regular expression to check to see if it is a valid email address
            let validEmailRegex = `/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/`
            if (!response.match(validEmailRegex)) {
                return 'Sorry! That is not the correct format for an email. Please try again'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the managers office number:',
        validate: (response) => {
            if (response === (NaN) && response !== '') {
                return 'Sorry! Please give me the managers id. Use numbers, no characters allowed'
            }
            return true
        }   
    },











    //Engineer
    {
        type: 'input',
        name: 'engineerName', 
        message: "What is the engineer name?",
        validate: (response) => {
            if (response === '') {
                return "Sorry! Please enter the engineer's name!"
            }
            return true
        }   
    },

    {
        type: 'input',
        name: 'engineerId',
        message: "Enter the engineer's id:",
        validate: (response) => {
            if (response === (NaN) && response !== '') {
                return "Sorry! Please give me the engineer's id. Use numbers, no characters allowed"
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: "Please enter the engineer email:",
        validate: (response) => {
            // here we use a regular expression to check to see if it is a valid email address
            let validEmailRegex = `/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/`
            if (!response.match(validEmailRegex)) {
                return 'Sorry! That is not the correct format for an email. Please try again'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please enter the engineers GitHub username:',
        // alphanumeric characters and dashes ( - )
        validate: (response) => {
            let gitHubRegex = `/^[a-zA-Z0-9-]+$/`;
            if (!response.match(gitHubRegex)) {
                return 'Sorry! please enter the engineers GitHub username without using any alphanumeric characters and dashes'
            }
            return true
        }       
    },









    //Intern
    {
        type: 'input',
        name: 'internName', 
        message: "What is the interns name?",
        validate: (response) => {
            if (response === '') {
                return "Sorry! Please enter the intern's name!"
            }
            return true
        }   
    },

    {
        type: 'input',
        name: 'internId',
        message: "Enter the intern's id:",
        validate: (response) => {
            if (response === (NaN) && response !== '') {
                return "Sorry! Please give me the intern's id. Use numbers, no characters allowed"
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'internEmail',
        message: "Please enter the intern's email:",
        validate: (response) => {
            // here we use a regular expression to check to see if it is a valid email address
            let validEmailRegex = `/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/`
            if (!response.match(validEmailRegex)) {
                return 'Sorry! That is not the correct format for an email. Please try again'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'internSchool',
        message: "Please enter the intern's school:",
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the interns school.'
            }
            return true
        }       
    },
];

const mainMenu = async () => {
    const options = ['Add an engineer', 'Add an intern', 'Return'];

    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do next?',
            choices: options
        }
    ]);

    if (choice === 'Return') {
        return
    }
}

//NEXT STEP: Turn each section into a function to be called with the menu option... not sure if I can do that with inquirer

