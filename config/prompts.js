module.exports = {
    start: [
        {
            type: "list",
            name: "start",
            message: "What would you like to do?",
            choices: [
                "Add Employee",
                "Add Role",
                "Add Department",
                "View All Employees",
                "View All Roles",
                "View All Departments",
                "Update Employee Role",
                // "View all Employees by Department",
                // "View all Employees by Manager",
                // "Remove Employee",
                // "Update Employee Manager",
            ]
        }],
    addDepartment: [{
        name: "name",
        message: "What is the department name?",
        type: "input"
    }],
    addRole: (departments) => [
        {
            name: "title",
            message: "What is the role name?",
            type: "input"
        },
        {
            name: "salary",
            message: "What is the role's salary?",
            type: "input",
            validate: (val) => !isNaN(val)
        },
        {
            name: "department_id",
            message: "Which department?",
            type: "list",
            choices: departments
        }
    ]
}