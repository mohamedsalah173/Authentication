/* eslint-disable import/no-extraneous-dependencies */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const { JWT_SECRET } = process.env;

const register = async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const result = await user.save();
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    const result = bcrypt.compareSync(user.password, password);
    if (result) {
      const token = jwt.sign({ firstName: user.firstName, lastName: user.lastName, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
      res.json(token);
    }
  } catch (error) {
    res.status(400).json({ error: 'Not Authenticated' });
  }
};

module.exports = {
  register,
  login,
};
