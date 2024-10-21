 // models/userModel.js (updated)
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z\s'-]{2,50}$/.test(v);
      },
      message: props => `${props.value} is not a valid name! Name should be 2-50 characters and can include letters, spaces, hyphens, and apostrophes.`
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email address']
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  acceptedTerms: {
    type: Boolean,
    required: true,
    validate: {
      validator: function(v) {
        return v === true;
      },
      message: 'You must accept the terms and conditions'
    }
  }
});

// Sanitize inputs
userSchema.pre('save', function(next) {
  this.name = validator.escape(this.name);
  this.email = validator.escape(this.email);
  this.phone = validator.escape(this.phone);
  next();
});

userSchema.statics.createUser = async function(userData) {
  const user = new this(userData);
  await user.save();
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;