const { connect, connection } = require('mongoose');

connect('mongodb://localhost/aPennyForYourThoughtsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;