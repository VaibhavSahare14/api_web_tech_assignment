const Customer = require("../models/customer");

//! GET CUSTOMER BY ID

exports.getCustomerByID = (req, res) => {
    console.log(req.params.customerID);
    Customer.findOne({ customer_id: req.params.customerID })
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: "No Customer Found", error: err.message
            })
        })
}

// GET ALL CUSTOMERS

exports.getCustomer = (req, res) => {
    Customer.find()
        .then((data) => {
            console.log({ data });
            res.json(data);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "No User Found", error: err.message })
        );
}

// CREATE NEW CUSTOMERS

exports.createCustomer = (req, res) => {
    Customer.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "User added Successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "Unable to add new user",
                error: err.message,
            })
        );
};