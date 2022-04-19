// Schema 

const opts = {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
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
      default: opts  //Date.now
      //Use a getter method to format the timestamp on query
     
    }, 
  }
  );