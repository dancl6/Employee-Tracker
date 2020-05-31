const express = require('express');
const db = require('./database');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());





// simple query
// connection.query(
//   'SELECT employee.id, first_name, last_name, title, dept_name, salary, manager_id FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id',
//   function(err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
 
// with placeholder
// connection.query(
//   'SELECT employee.id, first_name, last_name, title, dept_name, salary, manager_id FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id',
//   // ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );
// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});


// Start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});