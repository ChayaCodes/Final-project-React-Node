const threadController = require('../controllers/threadControllers/threadsController');

const router = require('express').Router();

router.get('/', threadController.getThreads);
router.get('/:id', threadController.getThread);
router.post('/', threadController.createThread);
router.put('/:id', threadController.updateThread);
router.delete('/:id', threadController.deleteThread);

module.exports = router;

