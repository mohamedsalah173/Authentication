const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minLength: 3,
    maxLength: 15,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 15,
  },
  username: {
    type: String,
    minLength: 3,
    maxLength: 15,
    unique: true,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 20,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
    maxLength: 15,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
