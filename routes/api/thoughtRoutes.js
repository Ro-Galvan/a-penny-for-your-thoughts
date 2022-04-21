const router = require('express').Router();

const {
  getThoughts,
  getSingleThoughts,
  createThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThoughts);

// /api/thoughts/:thoughtId/reactions

module.exports = router;