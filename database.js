// get the client
const mysql = require('mysql2');
// const ctable
const cTable = require('console.table');
// use node.js file structure module
const fs = require('fs');
// require('dotenv').config();
const express = require('express');
// use inquirer npm package
const inquirer = require('inquirer');
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'mysql',
  database: 'company'
});
// const promptChoice = profileData => {
 
// }

// db.connect(err => {
  // if (err) throw err;
  // console.log('connected as id ' + connection.threadId + '\n');
  // cr//eateProduct();
  // console.log("getting employees from table");
  db.query(
    // 'SELECT employee.id, first_name, last_name, title, dept_name,\
    //  salary, manager_id FROM employee LEFT JOIN roles ON employee.role_id\
    //   = roles.id LEFT JOIN department ON roles.department_id = department.id ;',
    // function(err, results, fields) {
    //   // console.log(results);
    //   console.table(results);
    //   // console.log(fields);
    // }
    `SELECT * FROM employee`,
    // `SELECT * FROM roles`,
    // `SELECT * FROM department`,
    function(err, results) {
      const rolesData = `SELECT * FROM roles`;
      const employeeData = `SELECT * FROM employee`;
      const departmentData = `SELECT * FROM department`;
      // promptChoice(rolesData, employeeData, departmentData);
      return inquirer.prompt([
        {
          type: 'list',
          name: 'build',
          message: "Which would you like to do: (Choose one)",
          choices: ['View all departments', 'View all  roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role']
        },
       
      ]).then(answers => {
    
        // var managerInfo = new Manager;
        // managerInfo = answers;
        // teamArray.push(managerInfo);
      
        // promptChoice();
      
      
      }  
      )
    }
  );







module.exports = db;