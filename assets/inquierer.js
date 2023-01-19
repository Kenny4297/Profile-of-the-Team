//This file will be used to store the questions

const inquirer = require('inquirer');
const fs = require('fs');
//I think we write this to the html file's certain locations. I think that I will have to save the answers as a variable to be put into the HTML file. I think this will still the .writeToFile() method, but currently I am not sure.

questions = [
    //Manager Questions
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the name of the manager'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'managerId',
        message: 'What is the managers ID?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the managers ID number!'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the managers email address!'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is the managers office number?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the managers office number!'
            }
            return true
        }   
    }, 

    //Engineer
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the name of the engineer'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineers ID?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the engineers ID number!'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the engineers email?',
        validate: (response) => {
            if (response === '') {
                return "Sorry! Please enter the engineer's email address!"
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'engineerGitHubUserName',
        message: 'What is the Engineers GitHub username?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please enter the Engineers GitHub username!'
            }
            return true
        }   
    }, 

    
]