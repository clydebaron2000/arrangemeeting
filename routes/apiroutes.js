const router = require('express').Router();
const db = require('../models');
const passport = require("../config");

router.post('/api/user', ({
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

router.post('/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get('/logout', (req, res) => {
    req.logout();
    res.send('Logged Out Successfully');
})


module.exports = router;