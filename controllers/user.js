const User = require('../models/user');

const register = async (req, res) => {
  console.log('ddd');
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

module.exports = {
  register,
};
