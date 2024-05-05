const router = require('express').Router();
const { getForums, getForum , getThreadById, createPost
} = require('../../controllers/forumsControllers/forumAdvensedControllers');

router.get('/', getForums);
router.get('/:id', getForum);
router.get('/:id/:threadId', getThreadById);
router.post('/:threadId/posts', createPost);

module.exports = router;
