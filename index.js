// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// const util = require("util")

// const generateMarkdown = require()


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
];

inquirer.prompt(questions).then((answers) => {
    var mockupReadMe = `# ${answers.title}

## Description

${answers.description}
    `;

    fs.writeFileSync('./result/README.md', mockupReadMe);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
