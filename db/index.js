const connection = require('connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    findDepartments() {
        return this.connection
        .promise()
        .query('SELECT * FROM departments')
    }
    findRoles() {
        return this.connection
        .promise()
        .query('SELECT * FROM roles')
    }
    findEmployees() {
        return this.connection
        .promise()
        .query('SELECT * FROM employees')
    };
    createDepartment() {
        return this.connection
        .promise()
        .query()
    };
    createRole() {
        return this.connection
        .promise()
        .query()
    };
    createEmployee() {
        return this.connection
        .promise()
        .query()
    };
    updateEmployee() {
        return this.connection
        .promise()
        .query()
    }
}

module.exports = DB;