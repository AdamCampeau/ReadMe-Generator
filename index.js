// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
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
    ]).then((data => {
        fs.writeFile("ReadME.md", markdown(data), err => err ? console.log(err) : console.log('Read me created!')  
   )}
)),

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();