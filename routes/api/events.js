const router = require('express').Router();
const eventCtrl = require('../../controllers/events');

router.post('/', eventCtrl.create);
router.get('/', eventCtrl.index);
router.get('/featured', eventCtrl.getFeatured);

module.exports = router;