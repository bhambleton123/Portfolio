const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../db/models").User;

passport.use(
  new LocalStrategy(async (email, password, done) => {
    try {
      const user = await User.findAll({
        where: {
          email,
        },
      });

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return done(err);
        } else if (!result) {
          return done(null, false);
        } else {
          return done(null, user);
        }
      });
    } catch (err) {
      return done(err);
    }
  })
);
