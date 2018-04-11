const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = Schema({
  id: ObjectId,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  }
  // One to many relationship
  // song: { type: ObjectId, ref: 'Song' }
});

const songSchema = Schema({
  id: ObjectId,
  name: String,
});

const User = model('User', userSchema);
const Song = model('Song', songSchema);

module.exports = { User, Song };
