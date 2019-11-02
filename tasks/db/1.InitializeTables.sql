
CREATE TABLE task (
	identifier SERIAL PRIMARY KEY,
	date TIMESTAMP NULL,
	name VARCHAR(20) NOT NULL,
	description VARCHAR(50) NOT NULL,
	completed BIT NOT NULL,
	time_required VARCHAR(20) NULL
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
)