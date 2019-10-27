module.exports = (app, db, security) => {
  app.get('/users/GetUsers', security.authenticate('cache'), (req, res) => {
    res.json({ status: 'success' })
  })

  app.get('/users', security.authenticate('cache'), async (req, res) => {
    const data = await db.Query()
    res.json({ status: 'success', rows: data.rows })
  })
}
