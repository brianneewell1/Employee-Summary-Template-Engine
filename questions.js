const questions = [
    {
		//Name
		type: 'input',
		message: 'Enter employee first and last name',
		name: 'Name',
		validate: function(name) {
			let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
			if (pass) {
				return true;
			}

			return 'Please enter a valid first and last name.';
		},
	},
    {
		//Email
		type: 'input',
		message: 'Enter employee email',
		name: 'email',
		validate: function(email) {
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
		validate: function(id) {
			if (id) {
				return true;
			}

			return 'Please enter a valid id.';
		},
	},
	{
		//Github Username
		type: 'input',
		message: 'Enter your github username',
		name: 'github',
		validate: function(github) {
			if (github) {
				return true;
			}

			return 'A github username is required';
		},
	},
	{
		//School name
		type: 'input',
		message: 'Enter the name of your school',
		name: 'school',
		validate: function(school) {
			if (school) {
				return true;
			}

			return 'A school name is required';
		},
    },
    {
		//Office Number
		type: 'input',
		message: 'Enter the office number',
		name: 'officeNumber',
		validate: function(officeNumber) {
			if (officeNumber) {
				return true;
			}

			return 'An office number is required';
		},
	},
	];

module.exports = questions;