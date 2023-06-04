const { Schema, model } = require('mongoose');
// create exerciseSchema with bodyPart, equipment, gifUrl, id, name and target from this api url https://exercisedb.p.rapidapi.com/exercises/bodyPart/%7BbodyPart%7D

const exerciseSchema = new Schema({
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
});

//const Exercise = model('Exercise', exerciseSchema);

module.exports = exerciseSchema;

