const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  {
    usernameField: 'username',
    passwordField: 'password'
  },
  function (username, password, done) {
    if (username === "miguel") {
      console.log(`${username} is valid...\n\tProceeding...`);
      return done(null, { id: 1, habits: 1 })
    } else {
      console.log(`${username} is INVALID.`);
      return done(null, false, { message: "Error" })
    }
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, { id: "miguel" });
});

module.exports = passport;