const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    Customer_id: {
        type: String,
        unique: true,
        required: true
    },
    Product_id: String,
    Product_name: String,
    Quantity: String,
    Customer: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }],
    Product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
