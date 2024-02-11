const threadController = require('../controllers/threadsController');

const router = require('express').Router();

router.get('/', threadController.getthreads);
router.get('/:id', threadController.getthread);
router.post('/', threadController.createthread);
router.put('/:id', threadController.updatethread);
router.delete('/:id', threadController.deletethread);

module.exports = router;

