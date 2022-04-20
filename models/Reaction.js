const { Schema } = require('mongoose');

// Schema 

function formatTimestamp (milliseconds) {
  return new Date(milliseconds).toLocaleString();
};

const reactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      type: Schema.Types.ObjectId,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // getter method to format the timestamp on query
      get: formatTimestamp

    },
  }
);


module.exports = reactionSchema;