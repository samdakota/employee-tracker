CREATE DATABASE employeeTracker;
USE employeeTracker;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role INTEGER NOT NULL,
    department INTEGER NOT NULL,
    salary INTEGER NOT NULL,
    manager VARCHAR(30) NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role) REFERENCES roles(title)) ON DELETE SET NULL,
    CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES departments(id) ON DELETE SET NULL,
    CONSTRAINT fk_salary FOREIGN KEY (salary) REFERENCES roles(salary) ON DELETE SET NULL,
    CONSTRAINT fk_manager FOREIGN KEY (manager) REFERENCES employees(id) ON DELETE SET NULL
);


