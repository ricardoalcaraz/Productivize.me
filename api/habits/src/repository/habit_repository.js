class HabitRepository {
    constructor(pool) {
        this.pool = pool;
     }

    async GetAllUserHabits(userName) {
        console.log("Returning all habits for user with identifier: " + userName);
        const sqlQuery = 'SELECT HabitDescription, HabitFrequency FROM UserHabit WHERE UserName = $1';
        let response = await this.pool.query(sqlQuery, [userName]);
        return response.rows;
    }

    async InsertUserHabit(habit){
        console.log("Inserting a habit", habit.HabitDescription, habit.HabitFrequency);
        const insertText = "INSERT INTO UserHabit(UserName, HabitDescription, HabitFrequency) VALUES ($1, $2, $3)"
        let response = await this.pool.query(insertText, [habit.UserName, habit.HabitDescription, habit.HabitFrequency]);
        return response;
    }
};

module.exports.HabitRepository = HabitRepository;
