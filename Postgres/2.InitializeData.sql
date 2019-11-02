INSERT INTO Frequency 
VALUES	(1, 'Daily'), (2, 'Weekly'), (3, 'Monthly'), (4, 'Custom');

INSERT INTO profile (identifier, credential, created_on, last_login)
VALUES	('Miguel', '1KSA@fnc', localtimestamp, localtimestamp),
		('Ricardo', '1KSA@fnc', localtimestamp, localtimestamp);

INSERT INTO habit(identifier, user_id, description, created_on, start_date, end_date, frequency_id)
VALUES 	(1, 'Ricardo', 'Dental Hygiene', localtimestamp, localtimestamp, NULL, 1),
	 	(2, 'Miguel', 'Practice Guitar', localtimestamp, localtimestamp, NULL, 1);

INSERT INTO task_habit(identifier, date, name, description, completed, time_required, habit_id)
VALUES 	(1, localtimestamp, 'Daily task', 'Brush teeth', false, '+2m', 1);

INSERT INTO standalone_task (identifier, date, name, description, completed, time_required, user_id)
VALUES 	(2, localtimestamp, 'Pets', 'Take cat to vet', false, '+1h', 'Miguel'),
		(3, localtimestamp, 'Bills', 'Pay bills', false, '+2m', 'Ricardo');

INSERT INTO task(identifier, date, name, description, completed, time_required)
VALUES	(4, localtimestamp, 'Subtask', 'Floss teeth', false, '+2m');

INSERT INTO subtask(parent_taskid, child_taskid)
VALUES	(1, 4);

INSERT INTO plant(identifier, name, description)
VALUES 	(1, 'Saguaro Cactus', 'A large tree-like cactus species which can grow to be over 40 feet (12 m) tall'),
		(2, 'Peanut Cactus', 'TBD'),
		(3, 'Ball Cactus', 'TBD');

INSERT INTO Garden(user_id, plant_id, level)
VALUES ('Ricardo', 1, 1),
	   ('Ricardo', 2, 1),
	   ('Miguel', 1, 1),
	   ('Miguel', 2, 4),
	   ('Miguel', 3, 2);
