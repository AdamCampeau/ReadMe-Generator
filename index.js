// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title: "
        },
        {
            type: "input",
            name: "description",
            message: "Project Description: "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation Instructions for Project: "
        },
        {
            type: "input",
            name: "demo",
            message: "Demo of Project: "
        },
        {
            type: "input",
            name: "credits",
            message: "Project Contributor(s): "
        },
        {
            type: "list",
            name: "licenses",
            message: "Licenses Used: ",
            choices: ["Apache_2.0", "BSD-2-Clause", "BSD-3-Clause", "BSD-4-Clause", "GPL-3.0", "MIT", "None"],
        },
        {
            type: "input",
            name: "test",
            message: "Project Testing: "
        },
        {
            type: "input",
            name: "development",
            message: "Future Development of Project: "
        },
        {
            type: "input",
            name: "github",
            message: "GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Email Address(es): "
        },

    ]).then(data => {
        // TODO: Create a function to write README file
        fs.writeFile("README.md", markdown(data), err => err ? console.log(err) : console.log('ReadMe Generated!'))
    })

}

// Function call to initialize app
init();