const inquirer = require ('inquirer');
const fs = require ('fs');
const path = require ('path');

const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');
const { type } = require('os');

let teamArray = [];

function init() {
    inquirer
        .prompt([
        {           
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
        },
        {           
            type: "input",
            name: "managerId",
            message: "What is your manager's ID?",
        },
        {           
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email?",
        },
        {           
            type: "input",
            name: "managerOfficeNum",
            message: "What is your manager's office number?",
        }
        ])
        .then(answer => {
            // console.log(answer)
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNum);
            // console.log(manager);
            teamArray.push(manager)
            console.log(teamArray);
            addEmployee();
        })
}

function addEmployee() {
    inquirer
        .prompt(
            {
                type: "list",
                name: "roleType",
                message: "Who would you like to add?",
                choices: [
                    "intern", "engineer"
                ]
            }
        ) .then (answer => {
            // console.log(answer)
            if (answer.roleType === "intern") {
                console.log("intern")
                addIntern();
            } else {
                console.log("engineer")
                addEngineer();
            }
        })
}

function addIntern() {
    inquirer
        .prompt([
            {           
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
            },
            {           
                type: "input",
                name: "internId",
                message: "What is your intern's ID?",
            },
            {           
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
            },
            {           
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
            },
        ]) 
        .then (answer => {
            const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
            teamArray.push(intern)
            console.log(teamArray)
        })
}

init();
