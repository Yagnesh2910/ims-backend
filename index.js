const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const productRoutes = require("./routes/proRoutes");
const userRoutes = require("./routes/userRoutes");


const dbConnect = async () => {
    try {
        // await mongoose.connect("mongodb://127.0.0.1:27017/Inventory");   //127.0.0.1 - localhost
        await mongoose.connect("mongodb+srv://yagneshsanku25:Bankai%40369@cluster0.1y6logt.mongodb.net/Inventory");
        console.log("Db Connected");
    } catch (error) {
        console.log("Error in connection");
        console.log(error);
    }
};

app.use(express.json());
app.use(cors());
app.get("/", (req,res) => {
    res.send("Hlo world");
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.listen(4000, () => {
    dbConnect();
    console.log("On 4000");
});