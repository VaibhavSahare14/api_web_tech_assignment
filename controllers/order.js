const Order = require("../models/order");

//! GET ORDER BY ID

exports.getOrderByID = (req, res) => {
    Order.findById({ _id: req.params.id })
        .then((data) => {
            console.log(data);
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({
                message: "No Order Found", error: err.message
            })
        })
}

// GET ALL ORDERS

exports.getOrder = (req, res) => {
    Order.find()
        .then((data) => {
            console.log({ data });
            res.json(data);
        })
        .catch((err) =>
            res
                .status(404)
                .json({ message: "No Order Found", error: err.message })
        );
}

// CREATE ORDER

exports.createOrder = (req, res) => {
    Order.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "Order added Successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "Unable to add new order",
                error: err.message,
            })
        );
};