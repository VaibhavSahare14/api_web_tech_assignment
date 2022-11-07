const express = require("express");

const router = express.Router();

const {
    getProduct,
    createProduct,
    getProductByID,
    getByProdType,
    putQuantity
} = require("../controllers/product");

router.get("/", getProduct);

router.get("/:productID", getProductByID);

router.get("/prodType/:prodType", getByProdType);

router.put("/availableQuan/:productName/:availableQuantity", putQuantity);

router.post("/", createProduct);

module.exports = router;