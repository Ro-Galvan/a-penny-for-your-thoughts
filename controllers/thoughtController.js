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
          { $addToSet: { thoughts: thought._id } }, //can do $push as well
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

// PUT to update a thought by its _id
updateThought(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: 'No thought with this id!' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

// DELETE to remove a thought by its _id
deleteThought(req, res) {
  Thought.findOneAndDelete({ _id: req.params.thoughtId })
    // .then((thought) =>
    //   !thought
    //     ? res.status(404).json({ message: 'No thought with that ID' })
    //     : res.json(thought)
        // : User.findOneAndUpdate(
        //   { _id: { $in: user.thoughts } },
        //   { $pull: { videos: req.params.videoId } }
        //   )
    // )
    .then((thought) => res.json({ message: 'thoughts deleted!' }))
    .catch((err) => res.status(500).json(err));
},

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field

addReaction(req, res) {
  console.log('You are adding a new reaction');
  console.log(req.body);
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res
          .status(404)
          .json({ message: 'No reaction found with that thoughtID :(' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));

},


// DELETE to pull and remove a reaction by the reaction's reactionId value
deleteReaction(req, res) {
  console.log('You are deleting a reaction');
  console.log(req.params.reactionId);
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res
          .status(404)
          .json({ message: 'No reaction found with that thoughtID :(' })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
},

};