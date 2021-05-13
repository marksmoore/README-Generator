

const inquirer = require("inquirer");
//const fs = require("fs");
//const gerateMarkdown = require("./utils/generateMarkdown");
//const api = require("./utils/api");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "ProjectTitle",
    message: "What is the name of the Project Title?"
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
