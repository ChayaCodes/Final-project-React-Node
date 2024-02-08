const meController = require('../controllers/meController');

const router = require('express').Router();

router.get('/', meController.getMe);
router.put('/', meController.updateMe);
router.delete('/', meController.deleteMe);

module.exports = router;