CREATE DATABASE user_credentials;
CREATE TABLE `user_credentials_table` (
  `user_id` int(20) NOT NULL,
  `user_name` char(30) NOT NULL,
  `user_password` char(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`));

USE user_credentials;
INSERT INTO user_credentials_table(user_id, user_name, user_password)
VALUES
	(1,'admin', "admin"),
	(2,'Tung',"password"),
	(3,'Kevin',"12345");