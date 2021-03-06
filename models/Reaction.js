const { Schema, Types } = require('mongoose');

const dateFormat = (date) => new Date(date).toLocaleString();

// function formatTimestamp (milliseconds) {
//   return new Date(milliseconds).toLocaleString();
// };

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // getter method to format the timestamp on query
      get: timestamp => dateFormat(timestamp)

    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


module.exports = reactionSchema;