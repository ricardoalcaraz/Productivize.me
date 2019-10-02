INSERT INTO Frequency VALUES('Daily'), ('Weekly'), ('Monthly'), ('Custom');

INSERT INTO UserProfile(UserID, Username, Password, CreatedOn)
VALUES  ('be09a512-e88e-11e9-81b4-2a2ae2dbcce4', 'Jerry', 'password', NOW()), 
        ('be09a77e-e88e-11e9-81b4-2a2ae2dbcce4', 'Richy', 'password', NOW()),
        ('be09a8dc-e88e-11e9-81b4-2a2ae2dbcce4', 'Miguel', 'password', NOW());

INSERT INTO UserHabit(UserName, HabitDescription, HabitFrequency)
VALUES  ('Miguel', 'Play Guitar', 'Daily'),
        ('Richy', 'Vacuum apartment', 'Weekly'),
        ('Richy', 'Go to Gym', 'Daily'),
        ('Jerry', 'Watch TV', 'Weekly');