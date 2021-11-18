const mongoose = require('mongoose'),
  { productDBSchema } = require('../schemas/product');

const Product = mongoose.model('Product', productDBSchema);
module.exports = { Product };