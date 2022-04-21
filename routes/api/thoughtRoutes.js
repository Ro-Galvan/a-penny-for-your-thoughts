const router = require('express').Router();

const {
  // getComments,
  // getSingleComment,
  // createComment,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getComments).post(createComment);

// /api/comments/:thoughtId
router.route('/:thoughtId').get(getSingleComment);

// /api/thoughts/:thoughtId/reactions

module.exports = router;