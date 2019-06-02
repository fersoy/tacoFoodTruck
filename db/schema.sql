### Schema

CREATE DATABASE tacos_db;
USE tacos_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name varchar(255) NOT NULL,
    shell varchar(255) NOT NULL,
	vegetarian BOOLEAN,
    picked_up BOOLEAN,
    PRIMARY KEY (id)
    
);
