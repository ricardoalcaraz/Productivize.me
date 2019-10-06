const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL } = require("../config/config.js");

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

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL
  },
  function (accessToken, refreshToken, profile, done) {
    return done(null, { id: profile.id })
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, { id: "fart" });
});

module.exports = passport;