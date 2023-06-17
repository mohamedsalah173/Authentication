const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    maxLength: 15,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 20,
    required: true,
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
