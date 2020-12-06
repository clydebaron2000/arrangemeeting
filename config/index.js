const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const db = require('../models')
require('dotenv').config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
  console.log('*** serializeUser called, user: ')
  console.log(user) // the whole raw user object!
  console.log('---------')
  done(null, {
    _id: user._id
  })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
  console.log('DeserializeUser called')
  db.users.findOne({
      _id: id
    },
    'username',
    (err, user) => {
      console.log('*** Deserialize user, user:')
      console.log(user)
      console.log('--------------')
      done(null, user)
    }
  )
})

// Google Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  callbackURL: "/auth/google/callback"
},
(accessToken, refreshToken, profile, cb) => {
  console.log(chalk.blue(JSON.stringify(profile)));
  user = { ...profile };
  return cb(null, profile);
}));

//  Use Strategies 
passport.use(LocalStrategy)

module.exports = passport