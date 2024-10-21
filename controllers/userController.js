const User = require('../models/userModel');

exports.showForm = (req, res) => {
  res.render('form');
};

exports.submitForm = async (req, res) => {
  try {
    const userData = {
      ...req.body,
      acceptedTerms: req.body.acceptedTerms === 'on'
    };

    await User.createUser(userData);
    res.send('Form submitted successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};