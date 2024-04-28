const router = require('express').Router();
const { getForums, getForum , getThreadById
} = require('../../controllers/forumsControllers/forumAdvensedControllers');

router.get('/', getForums);
router.get('/:id', getForum);
router.get('/:id/:threadId', getThreadById);

module.exports = router;
