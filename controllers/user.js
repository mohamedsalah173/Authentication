const User = require('../models/user');

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
  const { email } = req.body;
  try {
    const result = await User.findOne({ email }).exec();
    if (result) {
      res.json(result);
    } else {
      res.status(400).json({ error: 'Not Found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Not Authenticated' });
  }
};

module.exports = {
  register,
  login,
};
