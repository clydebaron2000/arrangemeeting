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
        res.send(req.user);
    }
)

// router.post("/login", (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//       if (err) throw err;
//       if (!user) res.send("No User Exists");
//       else {
//         req.logIn(user, (err) => {
//           if (err) throw err;
//           res.send("Successfully Authenticated");
//           console.log(req.user);
//         });
//       }
//     })(req, res, next);
//   });

router.get('/logout', (req, res) => {
    req.logout();
    res.send('Logged Out Successfully');
})

router.get('/logged_in', (req, res) => {
    console.log(req.user);
    res.send(req.user);
})


module.exports = router;