const router = require('express').Router();
const { getAllContects } = require('../../controllers/ContectControllers/ContectAdminControllers');

router.get('/', getAllContects);

module.exports = router;