

const inquirer = require("inquirer");
//const fs = require("fs");
//const gerateMarkdown = require("./utils/generateMarkdown");
//const api = require("./utils/api");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [

{
    type: "input",
    name: "Name",
    message: "What is your name?"
},
{
    type: "input",
    name: "GithubUsername",
    message: "What is your Github user name?"

},
{
    type: "input",
    name: "ProjectTitle",
    message: "What is the name of the Project Title?"
},
{
    type: "input",
    name: "ProjectDescription",
    message: "Please write a description for your project, what it does, and what you are hoping to accomplish with it."
},
{
    type: "input",
    name: "Installation",
    message: "How do you install the project?"
},
{
    type: "input",
    name: "Usage",
    message: "Please describe how you may use the project."
},
{
    type: "list",
    name: "License",
    message: "Provide a list of all Licenses you would like to use.",
    choices: [{
        name: "MIT License",
    },
    {
        name: "GNU General Public License v3",
    },
    {
        name: "ISC License",
    },
    {
        name: "Apache License 2.0"
    }]
},
{
    type: "input",
    name: "Contributors",
    message: "How many contributors were involved with your project?"
},
{
    type: "input",
    name: "Tests",
    message: "What kind of tests did you run for your project?"
}

];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    try {
    const answers = promptUser();
}catch(err) {
    console.log(err);
}
};

function promptUser(){
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();
