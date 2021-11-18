const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cloudinary_id: {
        type: String,
        required: false
    },
})

const productDBSchema = mongoose.Schema(productSchema);
module.exports = { productDBSchema };