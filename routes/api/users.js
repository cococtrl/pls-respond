const router = require('express').Router();
const userCtrl = require('../../controllers/users');

router.post('/signup', userCtrl.signup);

module.exports = router;