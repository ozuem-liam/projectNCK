const mongoose = require('mongoose');

const account = {
  email: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  first_name: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  phone_number: {
    type: String,
    maxlength: 20,
    default: '',
    index: {
      unique: true,
      partialFilterExpression: { phone_number: { $gt: '' } },
    },
    trim: true,
  },
  membership_type: {
    type: [String],
    enum: ['Customer', 'Admin'],
    default: 'Customer',
  },
  last_login: {
    type: Date,
  },
  external_id: {
    type: String,
    maxlength: 15,
    default: '',
    index: {
      unique: true,
      partialFilterExpression: { external_id: { $gt: '' } },
    },
    trim: true,
  },
  login_attempt: {
    type: Number,
    default: 0,
  },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
    },
  ],
};

const accountDBSchema = mongoose.Schema(account);
module.exports = { accountDBSchema };