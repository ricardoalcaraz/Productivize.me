--TODO: Implement OAUTH and get rid of password column
CREATE TABLE profile (
	identifier VARCHAR(50) PRIMARY KEY,
	credential VARCHAR(20) NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP NOT NULL
);

CREATE TABLE frequency (
	identifier int PRIMARY KEY,
	frequency_description VARCHAR(20)
);

CREATE TABLE plant (
	identifier int PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	description VARCHAR(20) NULL
);

CREATE TABLE garden (
	user_id VARCHAR(50),
	plant_id int,
	level int,
	CONSTRAINT garden_pk PRIMARY KEY(user_id, plant_id)
);

CREATE TABLE habit (
	identifier SERIAL PRIMARY KEY,
	user_id VARCHAR(50) NOT NULL,
	description VARCHAR(100) NOT NULL,
	created_on timestamp NOT NULL,
	start_date timestamp NOT NULL,
	end_date timestamp NULL,
	frequency_id int NOT NULL,
	FOREIGN KEY(user_id) REFERENCES profile(identifier),
	FOREIGN KEY(frequency_id) REFERENCES frequency(identifier)
);
