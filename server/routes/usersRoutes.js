const userController = require('../controllers/usersControllers/userController');

const router = require('express').Router();
const verifyAdmin = require('../middleware/verifyAdmin');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

