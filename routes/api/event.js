const router = require('express').Router();
const eventCtrl = require('../../controllers/events');

router.post('/', eventCtrl.create);
router.get('/', eventCtrl.index);

module.exports = router;