const router = require('express').Router();
const { getForums, getForum } = require('../../controllers/forumsControllers/forumAdvensedControllers');

router.get('/', getForums);
router.get('/:id', getForum);

module.exports = router;
