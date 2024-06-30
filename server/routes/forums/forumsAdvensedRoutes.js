const router = require('express').Router();
const { getForums, getForum , getThreadById, createPost, createThread
} = require('../../controllers/forumsControllers/forumAdvensedControllers');

router.get('/', getForums);
router.get('/:id', getForum);
router.get('/:id/:threadId', getThreadById);
router.post('/:threadId/posts', createPost);
router.post('/:forumId/threads', createThread);

module.exports = router;
