const router = require('express').Router();
const { getMe, editMe } = require('../../controllers/meController/meControllers');


router.get('/', getMe);
router.put('/', editMe);

module.exports = router;