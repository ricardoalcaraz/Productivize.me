const { requiresAuthentication } = require('../auth/auth.js');

module.exports = (app, db) => {
  app.get('/users/GetUsers', requiresAuthentication, (req, res) => {
    res.json({ status: 'success' });
  });

  app.get('/users', requiresAuthentication, (req, res) => {
    db.Query();
    res.json({ status: 'success' });
  });
}