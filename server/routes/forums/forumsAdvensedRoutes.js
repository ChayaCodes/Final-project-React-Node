const router = require('express').Router();
const { getThreads } = require('../../controllers/forumsControllers/forumAdvensedControllers');

router.get('/:id/threads', getThreads);

module.exports = router;
