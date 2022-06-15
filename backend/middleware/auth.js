const passport = require('passport');
const passportJWT = require('passport-jwt');
const User = require('../models/users.model');
const ExtractJWT = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: process.env.JWTSECRET,
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken('jwt'),
};

module.exports = function () {
  const strategy = new Strategy(params, (payload, done) => {
    console.log('Auth');
    console.log(payload);
    User.findById(payload.id, (err, user) => {
      if (err) {
        return done(new Error('User Not Found'), null);
      } else if (payload.expire <= Date.now()) {
        return done(new Error('Token Expired'), null);
      } else {
        return done(null, user);
      }
    });
  });

  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate('jwt', { session: false });
    },
  };
};
