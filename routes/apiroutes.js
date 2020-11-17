const router = require('express').Router();
const db = require('../models');

router.route('/api/user').post(({body}, res) => {
    db.users.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.status(404).json(err);
        })
});


module.exports = router;