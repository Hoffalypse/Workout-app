const { Schema, model } = require('mongoose');


const exreciseSchema = new Schema(
  {
    bodyPart: {
      type: String,
      required: true,
    
    },
    equipment: {
      type: String,
      required: true,
     
      
    },
    gifUrl: {
      type: String,
      required: true,
    },
    name: {
        type: String,
        required: true,
      },
      target: {
        type: String,
        required: true,
      },
   

  },

  {
    toJSON: {
      virtuals: true,
    },
  }
);
const User = model('Exercise', exreciseSchema);

module.exports = User;
