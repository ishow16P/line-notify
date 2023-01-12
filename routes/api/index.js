const router = require('express').Router();

router.use('/line-notify', require('./line.route'));

module.exports = router;