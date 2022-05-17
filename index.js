const inquirer = require ('inquirer')
const Fs = require ('fs')

const Engineer = require ('./lib/Engineer')
const Intern = require ('./lib/Intern')
const Manager = require ('./lib/Manager')

const Path = require ('path')
const generateHTML = require ('./src/generateHTML')

const pathToDist = Path.resolve(__dirname, "dist")
const fileToDist = Path.join(pathToDist, 'index.html')

const teamMemberArray = []


function runPrompt(){

    inquirer.prompt([

        {type:"list",
        name: "AddEmployee",
        message: "What kind of employee would you like to add?",
        choices: ["Manager", "Intern", "Engineer", "I'm Finished"]
        },

    ]) .then ((answers)=>{

        switch (answers.AddEmployee){

            case 'Manager':
                addManager();
                break;

            case 'Intern':
                addIntern();
                break;

            case 'Engineer':
                addEngineer();
                break;

            case "Finished Adding Employees":
                renderCards();
                break;

        }
    })
}

function addManager () {

    inquirer.prompt([

        {type:"input",
         name: "ManagerName",
         message: "What is your manager's name?",
        },

        { type: "input",
        name: "ManagerID",
        message: "What is your manager's ID?",
        },

        { type: "input",
          name: "ManagerEmail",
        message: "What is your manager's e-mail?",
        },

        {type: "input",
        name: "officeNumber",
        message: "What is your manager's office number?",
        }

    ]).then(data =>{

        const ManagerInstance = new Manager (data.ManagerName, data.ManagerID, data.ManagerEmail, data.officeNumber)
        teamMemberArray.push(ManagerInstance)
        runPrompt();

    })

}

function addIntern () {

    inquirer.prompt([

        {type:"input",
         name: "InternName",
         message: "What is your interns name?",
        },

        { type: "input",
        name: "InternID",
        message: "What is your interns ID?",
        },

        { type: "input",
          name: "InternEmail",
        message: "What is your interns e-mail?",
        },

        {type: "input",
        name: "SchoolName",
        message: "What is your interns school?",
        }

    ]).then(data =>{

        const InternInstance = new Intern (data.InternName, data.InternID, data.InternEmail, data.SchoolName)
        teamMemberArray.push(InternInstance)
        runPrompt();

    })

}

function addEngineer () {

    inquirer.prompt([

        {type:"input",
         name: "EngineerName",
         message: "What is your engineers name?",
        },

        { type: "input",
        name: "EngineerID",
        message: "What is your engineers ID?",
        },

        { type: "input",
          name: "EngineerEmail",
        message: "What is your engineers e-mail?",
        },

        {type: "input",
        name: "GitHub",
        message: "What is your engineers github username??",
        }

    ]).then(data =>{

        const EngineerInstance = new Engineer (data.EngineerName, data.EngineerID, data.EngineerEmail, data.GitHub)
        teamMemberArray.push(EngineerInstance)
        runPrompt();
        
    })
}

runPrompt();

function renderCards (){
    Fs.writeFileSync(fileToDist, generateHTML(teamMemberArray), "utf-8")
}