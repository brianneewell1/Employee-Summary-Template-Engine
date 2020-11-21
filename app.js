const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

questions();

function questions() {
    inquirer.prompt([
        {//Name
            type: 'input',
            message: 'Enter employee first and last name',
            name: 'name',
            validate: function (name) {
                let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
                if (pass) {
                    return true;
                }

                return 'Please enter a valid first and last name.';
            }
        },
        {
            //Email
            type: 'input',
            message: 'Enter employee email',
            name: 'email',
            validate: function (email) {
                let pass = email.match(/\S+@\S+\.\S+/g);
                if (pass) {
                    return true;
                }

                return 'Please enter a valid email.';
            },
        },
        {
            //Id
            type: 'id',
            message: 'Enter employee id',
            name: 'id',
            validate: function (id) {
                if (id) {
                    return true;
                }

                return 'Please enter a valid id.';
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
        //Question for Engineer
    ]).then((response) => {
        switch (response.role) {
            case "Engineer":
                inquirer.prompt({
                    //Github Username
                    type: 'input',
                    message: 'Enter your github username',
                    name: 'github',
                    validate: function (github) {
                        if (github) {
                            return true;
                        }

                        return 'A github username is required';
                    },
                }).then((answer) => {
                    employees.push(new Engineer(response.name, response.id, response.email, response.role, answer.github));
                    addAnother()
                });
                break;

            //Question for Intern
            case "Intern":
                inquirer.prompt({
                    //School name
                    type: 'input',
                    message: 'Enter the name of your school',
                    name: 'school',
                    validate: function (school) {
                        if (school) {
                            return true;
                        }

                        return 'A school name is required';
                    },
                }).then((answer) => {
                    employees.push(new Intern(response.name, response.id, response.email, response.role, answer.school));
                    addAnother()
                });
                break;

            //Question for Manager
            case "Manager":
                inquirer.prompt({
                    //Office Number
                    type: 'input',
                    message: 'Enter the office number',
                    name: 'officeNumber',
                    validate: function (officeNumber) {
                        if (officeNumber) {
                            return true;
                        }

                        return 'An office number is required';
                    },
                }).then((answer) => {
                    employees.push(new Manager(response.name, response.id, response.email, response.role, answer.officeNumber));
                    addAnother()
                });

                break;
        }
})
};

    function addAnother() {
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'another',
                message: "Do you want to add another employee?"
            }
        ]).then((response) => {
            if (response.another === true) {
                questions();
            }
            else {
                printEmployees();
            }
        })
    };

    function printEmployees() {
        fs.writeFile('./output/team.html', render(employees), function (err) {
            if (err) throw err;
        })
    };

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//start a function
//array with the id's and team members
//inquirer.prompt function (study that) 