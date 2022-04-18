const { Schema, model } = require('mongoose');

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
      ref: 'reactions'
    }], 
  }
);

// virtual property that retrieves the length of the thought's reactions array field on query
postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
