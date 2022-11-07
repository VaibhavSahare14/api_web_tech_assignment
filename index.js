const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const connectDB = require("./config/db");



// routes
const customer = require("./routes/customer");
const product = require("./routes/product");
const order = require("./routes/order");
// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("server is active"));

// use routes
app.use("/customer", customer);
app.use("/product", product);
app.use("/orders", order);

// setting up port

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
