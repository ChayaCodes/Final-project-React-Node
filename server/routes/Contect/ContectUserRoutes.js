const router = require('express').Router();
const ContectUserControllers = require('../../controllers/ContectControllers/ContectUserControllers');

router.post('/', ContectUserControllers.createContect);

module.exports = router;
