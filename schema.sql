    /* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS employee_tracker;

/* Create database */
CREATE DATABASE employee_tracker;
USE employee_tracker;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE  role (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE  employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id),
  FOREIGN KEY (manager_id) REFERENCES employee (id)
);