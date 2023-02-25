// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    
    {
  type: 'input',
  message: 'What is your Project title',
  name: 'Title',
},
{
    type: 'input',
    message: 'Describe the purpose and your motivation to create this app.',
    name: 'Description',
  },
  {
    type: 'input',
    message: 'Please provide a step-by-step guide of installing your app',
    name: 'Installation',
  },
  {
    type: 'input',
    message: 'How do you use this app?',
    name: 'Usage',
  },
  {
    type: 'input',
    message: 'Did you use any third party tool or people you need to credit?',
    name: 'Credits',
  },
  {
    type: 'input',
    message: 'License',
    name: 'License',
  },
  {
    type: 'input',
    message: 'List any special features your app possesses',
    name: 'Features',
  },
  {
    type: 'input',
    message: 'How can others contribute to the development of this app?',
    name: 'Contribution',
  },
  {
    type: 'input',
    message: 'Test Data',
    name: 'Tests',
  },
  {
    type: 'input',
    message: 'What is your Github Username?',
    name: 'Username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error) {
        if (error) {
            return console.log(error)
        } else {
            return console.log('Your Readme data written sucessfully');
        }
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userData) {
            writeToFile('Readme.md', generateMarkdown(userData)
            );
        }
        )
}

// Function call to initialize app
init();
