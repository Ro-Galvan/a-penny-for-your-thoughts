const { User, Thought } = require('../models');

// /api/thoughts
// GET to get all thoughts
module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // GET to get a single thought by its _id
  getSingleThoughts(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  // example 21
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } }, //might need to do $addToSet: activity 23
          { new: true } //need this to get updated posts
        );
      })
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'thought created, but no user found with this ID' })
          : res.json({ message: 'thought created' })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value