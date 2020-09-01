const inquirer = require("inquirer");
const prompts = require('./config/prompts')
const connection = require('./config/connection')

start()

function start() {
    inquirer.prompt(prompts.start)
        .then(function (res) {
            switch (res.start) {
                case "Add Employee":
                    addEmployee()
                    break;
                case "Add Role":
                    addRole()
                    break;
                case "Add Department":
                    addDepartment()
                    break;
                case "View All Departments":
                    viewDepartments()
                    break;
                case "View All Roles":
                    viewRoles()
                    break;
            }
        })
}

async function viewDepartments() {
    const qry = 'SELECT * FROM department'

    // connection.query(qry, function (err, result) {
    //     if (err) throw err;

    //     console.table(result)
    //     start()
    // })

    // connection.query(qry)
    //     .then(function (result) {
    //         console.table(result)
    //     })
    //     .catch(function (err) {
    //         if (err) throw err;
    //     })

    try {
        const result = await connection.query(qry)
        console.table(result)
    } catch (error) {
        if (error) throw error;
    }
}
async function viewRoles() {
    const qry = 'SELECT \
                role.id AS role_id, \
                title, \
                salary, \
                department_id, \
                name AS department\
                FROM role \
                LEFT JOIN department \
                ON role.department_id = department.id'

    try {
        const result = await connection.query(qry)
        console.table(result)
    } catch (error) {
        if (error) throw error;
    }
}

function addEmployee() {

}
async function addRole() {
    const qryDpt = 'SELECT \
            id AS value, \
            name \
            FROM department'

    const qryInsert = 'INSERT INTO role (title, salary, department_id) \
        VALUES (?,?,?)'

    try {
        const departments = await connection.query(qryDpt)
        const answer = await inquirer.prompt(prompts.addRole(departments))

        const data = [answer.title, answer.salary, answer.department_id]
        await connection.query(qryInsert, data)
        start();
    } catch (error) {
        console.log(error.message)
    }
}

function addDepartment() {
    inquirer.prompt(prompts.addDepartment)
        .then(function (answer) {
            const qry = 'INSERT INTO department (name) \
                        VALUES (?)'
            const data = [answer.name]

            connection.query(qry, data, function (err, result) {
                if (err) throw err;

                console.table(result)
                start()
            })
        })
}

