
select e.id, e.first_name, e.last_name, roles.title, department.dept_name, roles.salary, emp_manager.first_name, emp_manager.last_name 
AS manager FROM employee e
LEFT JOIN employee emp_manager ON e.manager_id = emp_manager.id 
LEFT JOIN roles ON e.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id ;