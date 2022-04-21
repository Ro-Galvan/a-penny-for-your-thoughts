const router = require('express').Router();

const {
  getThoughts,
  getSingleThoughts,
  // createComment,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createComment);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThoughts);

// /api/thoughts/:thoughtId/reactions

module.exports = router;