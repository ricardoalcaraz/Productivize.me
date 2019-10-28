module.exports = (app, db, security) => {
  app.get('/users', security.authenticate('cache'), async (req, res) => {
    const users = await db.GetUsers(req.query)
    res.json(users.rows)
  })

  app.get('/users/:name', security.authenticate('cache'), async (req, res) => {
    const user = await db.GetUser(req.params)
    res.json(user.rows)
  })

  app.get('/users/:name/habits', security.authenticate('cache'), async (req, res) => {
    const habits = await db.GetUserHabits(req.params)
    res.json(habits.rows)
  })

  app.get('/users/:name/:habitID', security.authenticate('cache'), async (req, res) => {
    const habits = await db.GetUserHabits(req.params)
    res.json(habits.rows)
  })
}
