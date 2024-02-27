// uploadsRoutes.js
const router = require('express').Router();
const { upload, uploadAvatar } = require('../../controllers/uploadsControllers/uploadsControllers');

router.put('/avatar', upload.single('image'), uploadAvatar);

module.exports = router;
