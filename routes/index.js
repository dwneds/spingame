var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', function(err) {
        if (err) {
            res.status(err.status).end();
        }
    });
});

module.exports = router;
