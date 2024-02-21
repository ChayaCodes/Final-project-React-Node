const postController = require('../../controllers/postsControllers/postsAdminController');

const router = require('express').Router();

router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;

