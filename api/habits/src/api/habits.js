module.exports = (app, db) => {
    app.get('/GetAllUserHabits', async (req, res) => {
        let userName = req.query.UserName;
        let habits = await db.GetAllUserHabits(userName);
        res.send(habits);
    });
    
    app.post('/InsertUserHabit', async (req, res) => {
        let userHabit = req.body;
        let response = await db.InsertUserHabit(userHabit);
        if(response){
            res.send("Success");
        } else {
            res.status(500)
        }
    });
}