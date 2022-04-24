// const { get } = require('express/lib/response');
const { Schema, model } = require('mongoose');
// importing reaction schema
const reactionSchema = require('./Reaction');

const dateFormat = (date) => new Date(date).toLocaleString();
// function formatTimestamp2 (milliseconds) {
//    return new Date(milliseconds).toLocaleString();
// };

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // getter method to format the timestamp on query
      get: timestamp => dateFormat(timestamp)
    }, 
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual property that retrieves the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;  
  // return `${this.reactions}`.length;  
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
