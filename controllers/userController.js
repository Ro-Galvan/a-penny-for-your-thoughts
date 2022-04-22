const { User, Thought } = require('../models');

// /api/users
// GET all users
module.exports = {
  getUsers(req, res) {
    User.find()
    // .populate('Thought') //maybe not needed--will replace id with object for thought 
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // GET a single user by its _id and populated thought and friend data
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
    .select('-__v')
    .populate('thoughts') //activity 23- from User.js line 18
    .then((user) =>
    !user
    ? res.status(404).json({ message: 'No user with that ID' })
    : res.json(user)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
  },
  // POST/create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // PUT to update a user by its _id

  // DELETE to remove user by its _id


//   /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

};
