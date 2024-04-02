const router = require('express').Router();
const forumsController = require('../../controllers/forumsControllers/forumsAdminController');
const verifyAdmin = require('../../middleware/verifyAdmin');

router.use(verifyAdmin);

router.get('/', forumsController.getForums);
router.get('/:id', forumsController.getForum);
router.get('/:id/threads', forumsController.getForumThreads);
router.post('/', forumsController.createForum);
router.put('/:id', forumsController.updateForum);
router.delete('/:id', forumsController.deleteForum);

module.exports = router;
