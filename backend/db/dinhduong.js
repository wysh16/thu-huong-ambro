// const mongoose = require("mongoose");
// const dinhduongSchema = new mongoose.Schema({
//   Id: Number,
//   Name: String,
//   Kcal: Number,
//   Protein: Number,
//   Glucid: Number,
//   Group: String,
// });

// const DinhDuong = mongoose.model("dinhduong", dinhduongSchema);

// module.exports = DinhDuong;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const dinhduongSchema = new mongoose.Schema({
  Id: { type: Number, required: true },
  Name: { type: String, required: true },
  Kcal: { type: Number, required: true },
  Protein: { type: Number, required: true },
  Lipid: { type: Number, required: true },
  Glucid: { type: Number, required: true },
  Group: { type: String, required: true },
});

// Tạo model từ schema
const DinhDuong = mongoose.model("dinhduong", dinhduongSchema);

module.exports = DinhDuong;
