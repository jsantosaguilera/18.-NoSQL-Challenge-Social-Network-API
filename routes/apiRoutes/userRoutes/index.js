const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById,
} = require('../../../controllers/userController');

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUserById);

module.exports = router;