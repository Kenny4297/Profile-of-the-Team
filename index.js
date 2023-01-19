// const inquirer = require('inquirer');
import inquirer from 'inquirer';
// const fs = require('fs');
import fs from 'fs';

//Creating the functions to be called in regards to the questions

const beginInquirerQuestions = async () => {
    // const manager = await managerFunction();
    mainMenu();
}

const mainMenu = async () => {
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do next?',
            choices: ['Add a manager','Add an engineer', 'Add an intern', 'Return']
        }
    ]);

    if (choice.choice === 'Add a manager') {
        let manager = await managerFunction();
        let menu = await mainMenu();

    } else if (choice === 'Add an engineer') {
        let engineer = await engineerFunction();
        let menu = await mainMenu();

    } else if (choice === 'Add an intern') {
        let intern = await internFunction();
        let menu = await mainMenu();
    }

    else {
        return
        //Here is when you send all the information to the classes you created
    }
}

//Manager function
const managerFunction = async () => {
    const managerResponses = await inquirer.prompt([
        {
            type: 'input',
            name: 'managerName', 
            message: "What is the managers name?",
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
                let validEmailRegex = /^[^@]+@[^@]+.[^@]+$/;
                if (!response.match(validEmailRegex)) {
                    return `Sorry! You entered ${response}. Please enter the managers Email`
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
    ]);
    //The responses can be accessed by (ManagerResponses.~'name' of the message)
    //Perhaps here is where you can add the answers to the respective class?
};

const engineerFunction = async () => {
    const engineerResponses = await inquirer.prompt([
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
    ]);
};

const internFunction = async () => {
    const internResponses = await inquirer.prompt([
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
                let validEmailRegex = /^[^@]+@[^@]+.[^@]+$/;
                console.log(response)
                if (!response.match(validEmailRegex)) {
                    console.log(response)
                    return `Sorry! You entered ${response}, and that is not the correct format for an email. Please try again`
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
    ]);
};

//Initiate prompt for testing purposes:
// managerFunction();

beginInquirerQuestions();


