--TODO: Implement OAUTH and get rid of password column
CREATE TABLE profile (
	identifier VARCHAR(50) PRIMARY KEY,
	credential VARCHAR(20) NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP NOT NULL
);

CREATE TABLE task (
	identifier SERIAL PRIMARY KEY,
	date TIMESTAMP NULL,
	name VARCHAR(20) NOT NULL,
	description VARCHAR(50) NOT NULL,
	completed BOOLEAN NOT NULL,
	time_required VARCHAR(20) NULL
);


CREATE TABLE frequency (
	identifier int PRIMARY KEY,
	frequency_description VARCHAR(20)
);

CREATE TABLE plant (
	identifier int PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	description VARCHAR(200) NULL
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

CREATE TABLE standalone_task (
	identifier SERIAL PRIMARY KEY,
	user_ID VARCHAR(50) NOT NULL,
	FOREIGN KEY(user_id) REFERENCES profile(identifier)
) INHERITS (task);

CREATE TABLE task_habit (
	identifier SERIAL PRIMARY KEY,
	habit_ID INT NOT NULL,
	FOREIGN KEY(habit_ID) REFERENCES habit(identifier)
) INHERITS (task);

CREATE TABLE completed_task (
	identifier SERIAL PRIMARY KEY,
	task_ID INT NOT NULL,
	date_completed TIMESTAMP NOT NULL,
	user_ID VARCHAR(50) NOT NULL,
	FOREIGN KEY(user_id) REFERENCES profile(identifier)
);

CREATE TABLE subtask (
	parent_taskID INT NOT NULL,
	child_taskID INT NOT NULL,
	CONSTRAINT subtask_pk PRIMARY KEY(parent_taskID, child_taskID)
);