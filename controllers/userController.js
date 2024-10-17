const User = require('../models/userModel');

exports.showForm = (req, res) => {
  res.render('form');
};

exports.submitForm = async (req, res) => {
  try {
    // Convert checkbox value to boolean
    const userData = {
      ...req.body,
      acceptedTerms: req.body.acceptedTerms === 'on'
    };

    const user = new User(userData);
    await user.save();
    res.send('Form submitted successfully!');
  } catch (error) {
    res.status(400).send(error.message);
  }
};