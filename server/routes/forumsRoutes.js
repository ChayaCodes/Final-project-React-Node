const forumsController = require('../controllers/forumsController');

const router = require('express').Router();

router.get('/', forumsController.getforums);
router.get('/:id', forumsController.getforum);
router.post('/', forumsController.createforum);
router.put('/:id', forumsController.updateforum);
router.delete('/:id', forumsController.deleteforum);

module.exports = router;

