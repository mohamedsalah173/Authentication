/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/auth';

mongoose.connect(MONGO_URL);

app.use(router);

app.use('*', (req, res) => {
  res.send('Error').status(400);
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
