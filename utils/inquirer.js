const inquirer = require('inquirer');
const getDepartments = require('../routes/apiRoutes/departmentRoutes');

function showOptions() {
    inquirer
    .prompt ([
        {
        type: 'list',
        name: 'options',
        choices: 'What would you like to do?',
        choices: [
                'View all departments',
                'View all roles',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                "Nothing"
                ]
        }
    ])
    .then((answers) => {
        switch(answers.options) {
            case 'View all departments':
                getDepartments();
                break;
            case 'View all roles':


        }
    })
}


module.exports = showOptions()