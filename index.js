const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');
const render = require('./src/page-template.js');

// constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];


// const DIST_DIR = path.resolve(__dirname, 'dist')
// const distPath = path.join(DIST_DIR, 'index.html');

// start application
function init() {

    // adding a manager
    function addManager() {
        console.log("Begin building your team profile");
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the name of the team manager?",
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the manager's ID?",
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?",
            }
        ])
        .then(res => {
            const manager = new Manager (
                res.managerName, 
                res.managerID, 
                res.managerEmail, 
                res.managerOfficeNumber);
            team.push(manager);
            console.log("Manager created");
            addEmployee();
        });
    }

    // adding an engineer
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's id?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
            }
        ]).then(res => {
            const engineer = new Engineer (
                res.engineerName, 
                res.engineerId, 
                res.engineerEmail, 
                res.engineerGithub);
            team.push(engineer);
            console.log("Engineer created");
            addEmployee();
        });
    }

    // adding an intern
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's id?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's school?",
            }

        ])
        .then(res => {
            const intern = new Intern (
                res.internName, 
                res.internId, 
                res.internEmail, 
                res.internSchool);
            team.push(intern);
            console.log("Intern created");
            addEmployee();
        });
    }

    // creating the other team members
    function addEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'employeeRole',
                message: "Would you like to add anymore team members?",
                choices: [
                    'Engineer',
                    'Intern',
                    'Finished building my team.'
                ]
            }
        ])
        .then((choice) => {
            console.log(choice.employee);
            if (choice.employee === 'Add an Engineer') {
                addEngineer();
            }
            if (choice.employee === 'Add an Intern') {
                addIntern();
            }
            if (choice.employee === 'Finished building my team.') {
                createTeam();
            }
        })
    };
    
    function createTeam() {

        // creates index.html file if it doesn't exist
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        fs.writeFileSync(outputPath, render(team), "utf-8");
        console.log("Team profile html created.");
    }
};

init();