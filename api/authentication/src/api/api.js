module.exports = (app, repo, security) => {
  app.get('/auth/logout', function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
      if (!err) {
        res.json({ user: req.user, status: 'logged out' });
      } else {
        res.json({ status: 'error' });
      }
    });
  });

  app.post('/auth/login/', security.authenticate('local'), function (req, res) {
    console.log('Local Authentication Success: ' + req.sessionID + ' ' + Object.getOwnPropertyNames(req.session.cookie));
    const user = req.session.user = req.user
    res.json({ user, status: 'authentication success' });
  });

  app.get('/auth/google/', security.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  app.get('/auth/google/callback',
    security.authenticate('google', { failureRedirect: '/auth/login' }),
    function (req, res) {
      console.log('Google Authentication Success: ' + req.user.id);
      const user = req.session.user = req.user
      res.json({ user, status: 'authentication success' });
    }
  );
}