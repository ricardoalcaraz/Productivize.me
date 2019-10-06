const passport = require('passport');

module.exports = (app, repo) => {
  app.get('/auth/logout', function (req, res) {
    req.logout();
    req.session.destroy(function (err) {
      if (!err) {
        res.json({ status: 'unauthorized' });
      } else {
        // handle error case...
      }
    });
  });

  app.post('/auth/login/', passport.authenticate('local'), function (req, res) {
    console.log('Local Authentication Success: ' + req.sessionID + ' ' + Object.getOwnPropertyNames(req.session.cookie));
    res.json(req.session.user = req.user);
  });

  app.get('/auth/google/', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/login' }),
    function (req, res) {
      console.log('Google Authentication Success: ' + req.user.id);
      req.session.user = req.user;
      res.json(req.session.user = req.user);
    }
  );

}