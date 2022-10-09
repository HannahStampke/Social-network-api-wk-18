const router = require('express').Router();
const { post } = require('.');
const {
    getAllThoughts,
    getOneThoughtById,
    createThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction,
} = require('../../controllers/thoughtsController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getOneThoughtById).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(postReaction);

router.route('/:thoughtId/reactions/:reactionsId').delete(deleteReaction);

module.exports = router;