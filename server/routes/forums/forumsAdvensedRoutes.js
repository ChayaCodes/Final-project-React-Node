const {getThreads} = require('../../controllers/forumsControllers/forumAdvensedControllers');

const router = require('express').Router();

router.get('/:id/threads', getThreads);

module.exports = router;

