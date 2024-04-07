DROP USER IF EXISTS php@localhost;
CREATE USER php@localhost IDENTIFIED BY 'phppassword';
GRANT ALL PRIVILEGES ON Assignment2.* TO php@localhost;

USE Assignment2;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS users_books;

CREATE TABLE users(
	id INT NOT NULL,
	email VARCHAR(50) NOT NULL,
	username VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE books(
	isbn INT NOT NULL,
	title VARCHAR(50) NOT NULL,
	author VARCHAR(50) NOT NULL,
	description VARCHAR(300),
	date_published DATE,
	PRIMARY KEY (isbn)
);

CREATE TABLE users_books(
	userID INT NOT NULL,
	bookID INT NOT NULL,
	PRIMARY KEY (userID, bookID)
);

