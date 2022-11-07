const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        unique: true,
        required: true
    },
    customer_name: String,
    email: { type: String, unique: true },
    balance: String
});

const Customer = mongoose.model("Customers", CustomerSchema);

module.exports = Customer;
