const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
// POST Method middleware
router.use(express.json());

// Create the Schema
const ProductSchema = new mongoose.Schema({
  productName: String,
  Price: Number,
  Description: String,
  Category: String,
  image: String,
});
const ProductModel = mongoose.model("Products", ProductSchema);

router.post("/post", async (req, res) => {
  const { productName, Price, Description, Category, image } = req.body;

  const CreateProduct = new ProductModel({
    productName,
    Price,
    Description,
    Category,
    image,
  });
  await CreateProduct.save();

  console.log(CreateProduct, "klk");
  res.send({ message: "Received" });
});
// GET all the products by admin


module.exports = {
  ProductRouters: router, // correct export name
};
