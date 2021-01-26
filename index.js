// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const util = require("util")

const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "title"
},

{
    type: "input",
    message: "What is the project about? Give a detailed description.",
    name: 'description'
},

{
    type: 'input',
    message: "What installation are used for your project?",
    name: "installation"
},

{
    type: 'list',
    message: "Which license would you like to have for this project?",
    name: "license",
    choices: [
        "GNU GPLv3",
        "Mozilla",
        "MIT",
        "None"
    ]
},

{
    type: 'input',
    message: "What is your email?",
    name: "email"
},
{
    type: 'input',
    message: "What is your github username",
    name: "username"
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log("Generating the README file.... done!");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        var mockupReadMe = generateMarkdown(answers);
        writeToFile('./result/README.md', mockupReadMe)
    })
}

// Function call to initialize app
init();
