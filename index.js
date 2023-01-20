import inquirer from 'inquirer';
import fs from 'fs';
import { Employee, Manager, Engineer, Intern } from './lib/positions.js';

const managerData = []; 
const engineerData = [];
const internData = [];

//Creating the functions to be called in regards to the questions

const mainMenu = async () => {
    const choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do next?',
            choices: ['Add a manager','Add an engineer', 'Add an intern', 'Exit'],
            pageSize: 4
        }
    ]);

    if (choice.choice === 'Add a manager') {
        let manager = await managerFunction();
        let menu = await mainMenu();

    } else if (choice.choice === 'Add an engineer') {
        let engineer = await engineerFunction();
        let menu = await mainMenu();

    } else if (choice.choice === 'Add an intern') {
        let intern = await internFunction();
        let menu = await mainMenu();
    }

    else {
        return
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
    let newManager = new Manager(managerResponses.managerName, managerResponses.managerId, managerResponses.managerEmail, managerResponses.officeNumber)
    managerData.push(newManager);
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
                let validEmailRegex = /^[^@]+@[^@]+.[^@]+$/;
                if (!response.match(validEmailRegex)) {
                    return `Sorry! You entered ${response}. Please enter the engineers Email`
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
                let gitHubRegex = /^[a-zA-Z0-9-]+$/;
                if (!response.match(gitHubRegex)) {
                    return 'Sorry! please enter the engineers GitHub username without using any alphanumeric characters and dashes'
                }
                return true
            }       
        },
    ]);
    let newEngineer = new Engineer(engineerResponses.engineerName, engineerResponses.engineerId, engineerResponses.engineerEmail, engineerResponses.gitHubUsername)
    engineerData.push(newEngineer);
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
                if (!response.match(validEmailRegex)) {
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
    let newIntern = new Intern(internResponses.internName, internResponses.internId, internResponses.internEmail, internResponses.internSchool)
    internData.push(newIntern);
};

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        //Node uses the failure check first
        if (err) {
            console.log("An error occurred")
        }
        console.log("HTML generated");
    })
}

//I think that I have to break this up unto three different functions (manager, engineer, and intern), and then set them to the HTML after the HTML is generated. Doing things this way is too complicated
const createEmployeeCards = () => {
    //MANAGER
    console.log("Create employee Cards function running");
    console.log(`228: The current allData Array is :${allData}`)
    allData.forEach(data => {
        console.log(`Line 231: the data from the allData array is ${data}`)
        if (data.role === 'Manager') {
            let generatedRow = document.createElement("div");
            generatedRow.setAttribute("class", "generated-row");

            generateDRow.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h2>${data.employeeName}</h2>
                    <h3>${data.role}</h3>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item1">Id: <span id="id-number">${data.id}</span> </li>
                        <li class="list-group-item2">Email: <span id="email">${data.email}</span></li>
                        <li class="list-group-item3">Office Number: <span id="office-number">${data.officeNumber}</span></li>
                    </ul>
            </div>
        `
        document.querySelector(".container").appendChild(generatedRow);

        //ENGINEER
        }  else if (data.role === 'Engineer') {
            let generatedRow = document.createElement("div");
            generatedRow.setAttribute("class", "generated-row");

            generateDRow.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h2>${data.employeeName}</h2>
                    <h3>${data.role}</h3>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item1">Id: <span id="id-number">${data.id}</span> </li>
                        <li class="list-group-item2">Email: <span id="email">${data.email}</span></li>
                        <li class="list-group-item3">Office Number: <span id="github-username">${data.gitHubUsername}</span></li>
                    </ul>
            </div>
        `
        document.querySelector(".container").appendChild(generatedRow);    
        //INTERN
        } else if (data.role === 'Intern') {
            let generatedRow = document.createElement("div");
            generatedRow.setAttribute("class", "generated-row");

            generateRow.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    <h2>${data.employeeName}</h2>
                    <h3>${data.role}</h3>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item1">Id: <span id="id-number">${data.id}</span> </li>
                        <li class="list-group-item2">Email: <span id="email">${data.email}</span></li>
                        <li class="list-group-item3">Office Number: <span id="school">${data.school}</span></li>
                    </ul>
            </div>
        `
        document.querySelector(".container").appendChild(generatedRow);
        }  
    })
}

//Generate the HTML first, then add to it with an if then statement

const generateHTML = () => {
    console.log("Writing to the file...")
    return `
    <!doctype html>
    <html lang="en">
    <head>
        <title>Title</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="./index.js" defer></script>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <div class="container">
            <div class="managers">
                
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

const beginInquirerQuestions = async () => {
    let menu = await mainMenu();
    let writeHTML = await generateHTML();
    let writeToTheFile = await writeToFile(`./index.html`, writeHTML);
    let addRolesToHTML = await createEmployeeCards();
}

beginInquirerQuestions();

// const init = async () => {
//     //awaiting the prompt method that takes in a set of questions and saves the user input to the variable 'responses'
//     let responses = await inquirer.prompt(questionsForReadme);

//     //Writes to the MD file in the first argument, and passes in the user responses as the second argument
//     writeToFile(`./readmeFile.md`, generateMarkdown(responses));
// }


