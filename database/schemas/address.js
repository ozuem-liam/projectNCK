const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const address = {
  country: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  postal_code: {
    type: String,
    required: true,
    maxlength: 15,
    trim: true,
  },
  type: {
    type: [String],
    enum: ['default', 'postal'],
    default: 'default',
  },
  account_id: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
  },
};

const addressDBSchema = mongoose.Schema(address);
module.exports = { addressDBSchema };
