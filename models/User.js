const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: { 
    type: String,
    // Unique
    required: true,
    // trimmed
    },
    // posts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: 'post',
    //   },
    // ],
    email: { 
      type: String,
      required: true,
       // Unique
      //  Must match a valid email address (look into Mongoose's matching validation)
  },
  // {
  //   // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
  //   // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
  }
);







// Initialize User model
const User = model('user', userSchema);

module.exports = User;