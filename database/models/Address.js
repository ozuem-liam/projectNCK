const mongoose = require('mongoose'),
  { addressDBSchema } = require('../schemas/address');

const Address = mongoose.model('Address', addressDBSchema);
module.exports = { Address };