INSERT INTO department (dept_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Person', '80000', '1' ),
('Sales Lead', '100000', '1'),
('Lead Engineer', '150000' ,'2'),
('Software Engineer', '120000', '2'),
('Legal Team Lead', '250000', '4'),
('Lawyer ', '190000', '4'),
('Accountant ','125000', '3' );

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe','2', '3' ),
('Mike', 'Chan', '1','1'),
('Ashley', 'Rodriguez', '3', null),
('Kevin', 'Tupik', '4', '3'),
('Malia', 'Brown', '7', null),
('Sarah', 'Lourd', '5', null),
('Tom', 'Allen', '6', '6'),
('Christian', 'Eckenrode', '3', '2');

-- SELECT employee.id, first_name, last_name, title, dept_name, salary, manager_id FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id ;