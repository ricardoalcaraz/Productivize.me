
const passport = require('passport');

module.exports = (app, repo) => {

  app.get('/auth/local/', function (req, res) {
    res.sendFile(__dirname + '/local.html');
  });

  app.post('/auth/local/', passport.authenticate('local'), function (req, res) {
    console.log(req.body.msg);
    res.send("" + Object.keys(req.user));
  });

  app.get('/auth/visit/', function (req, res) {
    const v = req.session.visits;
    req.session.visits = !!v ? v + 1 : 1;
    res.send("Viadfdafdaasdadsfg..");
  });

  app.get('/auth/visited/', function (req, res) {
    console.log('Testing auth');
    res.send(`Visits: ${req.session.visits}`);
  });
}