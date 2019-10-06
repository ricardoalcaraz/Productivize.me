const passport = require('passport');
const CustomStrategy = require('passport-custom').Strategy;

passport.use('cache', new CustomStrategy(
  function (req, callback) {
    const user = req.session.user;
    if (!!user && !!user.id) {
      callback(null, user);
    } else {
      callback(null, false, { message: "Cache does not contain a user." })
    }
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, { id });
});


module.exports = passport;
