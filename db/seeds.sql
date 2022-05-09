INSERT INTO departments (name)
VALUES
    ('etching'),
    ('lithography'),
    ('silkscreen'),
    ('sales')

INSERT INTO roles (title, salary, department_id)
VALUES
    ('title', 100, 1)

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 1, NULL),
    ('Jack', 'London', 2, NULL),
    ('Robert', 'Bruce', 3, NULL),
    ('Peter', 'Greenaway', 4, 3),
    ('Derek', 'Jarman', 4, 3),
    ('Paolo', 'Pasolini', 5, 1),
    ('Heathcote', 'Williams', 6, 4)