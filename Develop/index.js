// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const gerateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");



// TODO: Create an array of questions for user input

const questions = [

{
    type: "input",
    name: "Name",
    message: "What is your name?",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter your Name!');
          return false;
        }
      }
},
{
    type: "input",
    name: "GithubUsername",
    message: "What is your Github user name?",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter your Github Username!');
          return false;
        }
      }
},
{
    type: "input",
    name: "ProjectTitle",
    message: "What is the name of the Project Title?",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter the Project Title!');
          return false;
        }
      }
},
{
    type: "input",
    name: "ProjectDescription",
    message: "Please write a description for your project, what it does, and what you are hoping to accomplish with it.",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to provide a description!');
          return false;
        }
      }
    {
    type: "input",
    name: "Installation",
    message: "How do you install the project?",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to mention installation!');
          return false;
        }
      }
},
{
    type: "input",
    name: "Usage",
    message: "Please describe how you may use the project.",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to tell how to use the product!');
          return false;
        }
      }
},
{
    type: "checkbox",
    name: "License",
    message: "Provide a list of all Licenses you would like to use.",
    choices: ["MIT License", "GNU General Public License v3", "ISC License", "Apache License 2.0", "None"]
},
{
    type: "input",
    name: "Contributors",
    message: "How many contributors were involved with your project?",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to tell how many contributors there were! Enter 0 if there were none!');
          return false;
        }
      }
},
{
    type: "input",
    name: "Tests",
    message: "What kind of tests did you run for your project?",
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter if there were any tests! Enter "none" if that was the case!');
          return false;
        }
      }
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err){
    if (err){
        console.error(err);
    }
  });

}

// TODO: Create a function to initialize app
async function init() {
    try {
    const answers = promptUser();
    const user = await api.getUser(answers.GithubUsername);
    const readMe = gerateMarkdown(answers, user);
    writeToFile("GenerateREADME.md", readMe);
    console.log("****README sucessfully created****");

}catch(err) {
    console.log(err);
}
};

function promptUser(){
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();
