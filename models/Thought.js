const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
      default: Date.now
      //Use a getter method to format the timestamp on query
    }, 
    username: {
      type: String,
      required: true
    },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction' //changed from reactions to match line 37 in reaction.js
    }], 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// virtual property that retrieves the length of the thought's reactions array field on query
postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;  
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
