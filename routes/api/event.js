const router = require('express').Router();
const eventCtrl = require('../../controllers/events');

router.post('/', eventCtrl.create);
router.get('/', eventCtrl.index);
router.get('/event', eventCtrl.getEvent);
// router.delete('/event', eventCtrl.delEvent);
// router.get('/event', eventCtrl.edit);

module.exports = router;