const mysql = require("mysql");
const util = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "codeme10",
    database: "employee_tracker"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as " + connection.threadId);
})

connection.query = util.promisify(connection.query)

module.exports = connection