// TODO: Write code to define and export the Employee class
/*name
id
email
getName()
getId()
getEmail()
getRole() // Returns 'Employee'*/

//Global Variables
//Import inquirer and node modules
const { prompt } = require('inquirer');
const { writeFile } = require('fs');
const { promisify } = require('util');

const questions = [
    {
		//Name
		type: 'input',
		message: 'Enter employee first and last name',
		name: 'name',
		validate: function(name) {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid first and last name.';
		},
	},
    {
		//Id
		type: 'input',
		message: 'Enter employee ID number',
		name: 'id',
		validate: function(id) {
			let pass = id.match(/\S+@\S+\.\S+/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid ID number.';
		},
	},
	{
		//Email
		type: 'input',
		message: 'Enter your email',
		name: 'email',
		validate: function(email) {
			if (username) {
				return true;
			}

			return 'Please enter a valid email';
		},
	},
		
];

module.exports = employee;