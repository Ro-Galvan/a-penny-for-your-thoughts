const router = require('express').Router();
// const { Thought } = require('../models'); //is this needed here??

app.post('/thoughts', (req, res) => {
  // Use db connection to add a document
  db.collection('thoughtCollection').insertOne(
    { name: req.body.name, breed: req.body.breed },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});



// Finds all departments
app.get('/thoughts', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Thought.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, Internal Server Error', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

module.exports = router;