const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    Product_id: {
        type: String,
        unique: true,
        required: true
    },
    Product_type: String,
    Product_name: String,
    Product_price: String,
    Available_quantity: String
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;