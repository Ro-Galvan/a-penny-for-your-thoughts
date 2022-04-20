const router = require('express').Router();


app.post('/thoughts', (req, res) => {
  // Use db connection to add a document
  db.collection('petCollection').insertOne( //no schema or db needed for mongo-you can instert directly
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
  Department.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, Internal Server Error', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});

module.exports = router;