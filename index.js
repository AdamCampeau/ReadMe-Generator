// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"Project Title: "   
        },
        {
            type:"input",
            name:"description",
            message:"Project Description: "
        },
        {
            type:"input",
            name:"installation",
            message:"Installation Instructions for Project: "
        },
        {
            type:"input",
            name:"demo",
            message:"Demo of Project: "
        },
        {
            type:"input",
            name:"credits",
            message:"Project Credits: "
        },
        {
            type:"checkbox",
            name:"licenses",
            message:"Licenses Used: ",
            choices: ["ISC", "NCSA", "lgpl_3.0", "gpl_3.0","MIT", "ZLIB", "Apache_2.0"],
        },
        {
            type:"input",
            name:"test",
            message:"Project Testing: "
        },
        {
            type:"input",
            name:"development",
            message:"Future Development of Project: "
        },
        {
            type:"input",
            name:"email",
            message:"Email Address(es): "
        },

    ]).then((data => {      
        // TODO: Create a function to write README file
        fs.writeFile("ReadME.md", markdown(data), err => err ? console.log(err) : console.log('ReadMe Generated!')  
   )}
)),


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();