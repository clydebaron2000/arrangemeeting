const router = require('express').Router();
const db = require('../models');
const passport = require("../config/passport");

router.route('/api/user').post(({
    body
}, res) => {
    db.users.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(404).json(err);
        })
});

router.route('/login').post((req, res, next) => {
        console.log('routes/user.js login, req.body: ', req.body);
        next();
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.email);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    });


module.exports = router;