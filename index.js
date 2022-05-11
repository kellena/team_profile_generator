const inquirer = require ('inquirer');
const fs = require ('fs');

const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const Manager = require ('./lib/Manager');


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
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNum);
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
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {           
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
            },
            {           
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID?",
            },
            {           
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
            },
            {           
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's github?",
            },
        ]) 
        .then (answer => {
            const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
            teamArray.push(engineer)
            writePage();
        })
}

const writePage = (pageContent) => {
    fs.writeFile('./dist/index.html', pageContent, (err) =>{
        if (err) {
            console.log(err)
        } else {
            console.log('index.html creation successful')
        }
    })
};

init()

.then(data => generatePage(data))
.then(generateHtml => writePage(generateHtml))
.catch(err => console.log(err))