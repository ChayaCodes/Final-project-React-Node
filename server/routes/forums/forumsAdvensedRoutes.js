const router = require('express').Router();
const { getForums } = require('../../controllers/forumsControllers/forumAdvensedControllers');

router.get('/', getForums);

module.exports = router;
