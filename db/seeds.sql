INSERT INTO departments (name)
VALUES
    ('etching'),
    ('lithography'),
    ('silkscreen'),
    ('sales');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('printer', 100, 1),
    ('sales manager', 100, 1),
    ('graphic designer', 100, 1),
    ('intern', 100, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 1, 1),
    ('Jack', 'London', 2, 1),
    ('Robert', 'Bruce', 3, 1),
    ('Peter', 'Greenaway', 4, 3),
    ('Derek', 'Jarman', 4, 3),
    ('Paolo', 'Pasolini', 4, 1),
    ('Heathcote', 'Williams', 4, 4);