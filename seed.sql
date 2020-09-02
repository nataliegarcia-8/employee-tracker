/* Seeds for SQL table. */
USE employee_tracker;

/* Insert 3 Rows into a new table */
INSERT INTO department (id, name)
VALUES ("test");

INSERT INTO role (id, title, salary, department_id)
VALUES ("test1");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("test2");
