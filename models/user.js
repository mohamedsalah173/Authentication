/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
  userName: {
    type: String,
    minLength: 3,
    maxLength: 15,
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
}, {
  toJSON: {
    transform(doc, ret) {
      delete ret.password;
    },
  },
});

userSchema.pre('save', function preSave(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
