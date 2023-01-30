const router = require('express').Router();

router.use('/line-notify', require('./line.route'));
router.use(require('./images.route'));

module.exports = router;