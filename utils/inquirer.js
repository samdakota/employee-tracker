const inquirer = require("inquirer");
const DB = require("../db");
// const getDepartments = require('../routes/apiRoutes/departmentRoutes');

function showOptions() {
  console.log("Welcome to the employee database!");
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        choices: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "Nothing",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.options) {
        case "View all departments":
          showDepartments();
          break;
        case "View all roles":
          showRoles();
          break;
        case "View all employees":
          showEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateRole();
          break;
        default:
          showOptions();
      }
    });
}
// THEN I am prompted to enter the name of the department and that department is added to the database
const departmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "New department name is:",
  },
];

// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const employeeQuestions = [
  {
    type: "input",
    name: "first_name",
    message: "New employee first name is:",
  },
  {
    type: "input",
    name: "last_name",
    message: "New employee last name is:",
  },
  {
    type: "list",
    name: "role",
    message: "Employee role is:",
    choices: [],
  },
  {
    type: "list",
    name: "manager",
    message: "Employee's manager is:",
    choices: [],
  },
];

function showDepartments() {
  DB.findDepartments().then(([rows]) => {
    let departments = rows;
    console.table(departments);
  });
}

function showRoles() {
  DB.findRoles().then(([rows]) => {
    let roles = rows;
    console.table(roles);
  });
}

function showEmployees() {
  DB.findEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => showOptions());
}

function addDepartment() {
  prompt([
    {
      type: "input",
      name: "name",
      message: "New department name is:",
    },
  ]).then((department) => {
    DB.createDepartment(department)
      .then(() => console.log("New department created."))
      .then(showOptions);
  });
}

function addRole() {
  DB.findDepartments().then(([rows]) => {
    let departments = rows;
    let departmentChoices = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    }));
    prompt([
      {
        type: "input",
        name: "name",
        message: "New role name is:",
      },
      {
        type: "input",
        name: "salary",
        message: "Role salary is:",
      },
      {
        type: "list",
        name: "department",
        message: "New role department is:",
        choices: departmentChoices,
      },
    ]).then((role) => {
      DB.createRole(role)
        .then(() => console.log("New role created."))
        .then(showOptions);
    });
  });
}

function addEmployee() {
    DB.findRoles().then(([rows]) => {
        let roles = rows;
        return roles.map(({ id, name }) => ({
            name: name,
            value: id,
        }
        ))
        .then((roles) => {
            DB.findEmployees().then(([rows]) => {
            let employees = rows;
            let employeeChoices = employees.map(({ id, name }) => ({
                name: name,
                value: id,
            }));
        })
    })
    
}

module.exports = showOptions();
