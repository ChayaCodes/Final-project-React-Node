const router = require('express').Router();
const threadController = require('../../controllers/threadControllers/threadsAdminController');

router.get('/', threadController.getThreads);
router.get('/:id', threadController.getThread);
router.post('/', threadController.createThread);
router.put('/:id', threadController.updateThread);
router.delete('/:id', threadController.deleteThread);

module.exports = router;
