const { Router } = require('express');

const router = Router();

router.use(require('./auth.route'));
router.use(require('./book.route'));
router.use(require('./profile.route'));

module.exports = router;
