const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  shotDescription: String,
  description: String,
  purchasePrice: Number,
  sellingPrice: Number,
  images: Array(String),
  categoryId: [{ type: Schema.Types.ObjectId, ref: "categories" }],
});

const Category = mongoose.model("products", productSchema);

module.exports = Product;
