module.exports = (app, db, security) => {
  app.get('/users/GetUsers', security.authenticate('cache'), (req, res) => {
    res.json({ status: 'success' });
  });

  app.get('/users', security.authenticate('cache'), (req, res) => {
    db.Query();
    res.json({ status: 'success' });
  });
}