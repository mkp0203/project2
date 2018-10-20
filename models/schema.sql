DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;
 USE fitness_db; 
 
 
 CREATE TABLE nutrition (  
 id INT(255) AUTO_INCREMENT NOT NULL,  
 Food VARCHAR(255) NOT NULL, 
 Calories INT(255) NOT NULL,  
 Fat INT(255) NOT NULL,  
 Carbohydrates INT(255) NOT NULL,   
 Protein INT (255) NOT NULL,  
 PRIMARY KEY (id) 
 );
 
 CREATE TABLE user (   
 id INT(255) AUTO_INCREMENT NOT NULL,    
 username VARCHAR(50) NOT NULL,   
 `password` VARCHAR(32) NOT NULL,  
 email VARCHAR(255) NOT NULL,  
 PRIMARY KEY (id)
  );