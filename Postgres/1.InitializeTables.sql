--TODO: Implement OAUTH and get rid of password column
CREATE TABLE UserProfile(
	UserID UUID PRIMARY KEY,
	Username VARCHAR(50) UNIQUE NOT NULL,
	Password VARCHAR(20) NOT NULL,
	CreatedOn TIMESTAMP NOT NULL,
	LastLogin TIMESTAMP NULL
);

CREATE TABLE Frequency(
	Description VARCHAR(50) PRIMARY KEY
);

CREATE TABLE UserHabit(
	UserHabitID SERIAL PRIMARY KEY,
	UserName VARCHAR(50) NOT NULL,
	HabitDescription VARCHAR(100) UNIQUE NOT NULL,
	HabitFrequency VARCHAR(20),
	Category VARCHAR(20),
	FOREIGN KEY (UserName) REFERENCES UserProfile(UserName)
);

CREATE TABLE UserStat(
	StatID SERIAL PRIMARY KEY,
	UserHabitID INT NOT NULL,
	CompletedOn TIMESTAMP NOT NULL
);



