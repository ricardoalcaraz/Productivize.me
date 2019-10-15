module.exports = (app, db) => {
  app.get('/GetAllUserHabits', async (req, res) => {
    const userName = req.query.UserName
    const habits = await db.GetAllUserHabits(userName)
    res.send(habits)
  })

  app.post('/InsertUserHabit', async (req, res) => {
    const userHabit = req.body
    const response = await db.InsertUserHabit(userHabit)
    if (response) {
      res.send('Success')
    } else {
      res.status(500)
    }
  })
}
