const postController = require('../controllers/postsController');

const router = require('express').Router();

router.get('/', postController.getposts);
router.get('/:id', postController.getpost);
router.post('/', postController.createpost);
router.put('/:id', postController.updatepost);
router.delete('/:id', postController.deletepost);

module.exports = router;

