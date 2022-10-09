const router = require('express').Router();

const {
    getAllUsers,
    getOneUserById,
    createNewUser,
    updateUser,
    deleteUser,
    addUserFriend,
    deleteUserFriend,
} = require('../../controllers/userController');

router.route('/'),get(getAllUsers).pist(createNewUser);

router.route('/:userId').get(getOneUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(ddUserFriend).delete(deleteUserFriend);

module.exports = router;