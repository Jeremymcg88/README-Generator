// // TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')


// Questions
    // github username
    // email
    // title of your project
    // description
    //  installation (ask to provide installation)


// TODO: Create an array of questions for user input
// const questions = [];
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required. No @ needed.)',
        validate: gitNameInput => {
            if (gitNameInput) {
              return true;
            } else {
              console.log('Please enter a valid Github username!');
              return false;
            }
          }
        },
      
        {
        type: 'input',
        name: 'email',
        message: 'Enter your email (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
      },
     {
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
    default: 'Project Title',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid project title is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "Write a description of your project.",
    name: 'description',
    default: 'Project Description',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid project description is required.");
        }
        return true;
    }
},
{
    type: 'input',
    message: "If applicable, describe the steps required to install your project for the Installation section.",
    name: 'installation'
},

{
    type: 'input',
    message: "To use this application, run the following command:",
    name: 'usage'
},


{
    type: 'input',
    message: "Who is contributing",
    name: 'contributions'
},
{
    type: 'input',
    message: "What are the tests",
    name: 'test'
},

{
    type: 'list',
    name: "license",
    message: "Choose a license for your project.",
    choices: ["Apache", "Apache 2.0", "GNU GPLv3", "MIT", "ISC", "none",],
    
}
     
    ]);
  };
  
  // // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
    });
}
// // TODO: Create a function to initialize app
function init() {
    questions().then((inquirerAnswers) => {
        console.log(inquirerAnswers);
        const markDown = generateMarkdown(inquirerAnswers);
        writeToFile ("README.md", generateMarkdown({ ...inquirerAnswers}))
        console.log("Success! Your README.md file has been generated")
    })

  
}
  
// Function call to initialize app
init()
