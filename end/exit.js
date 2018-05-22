const express = require('express');
const db = require('../models/db');
const router = express.Router();

router.get('/', function (req, res) {
    db.user.update({
        username: req.cookies.user
    }, {
        state: false
    }).then(function () {
        res.clearCookie('user');
        res.redirect('/api/login');
    });
});

module.exports = router;