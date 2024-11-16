const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
const DanhMucRoutes = require("./routes/danhmuc");
const authRoutes = require("./routes/auth");
const Congthuc = require("./routes/congthuc");
const KhuyenMai = require("./routes/khuyenmai");
const orderRoutes = require("./routes/donhang");
const DinhDuongRoutes = require("./routes/dinhduong");

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);




// --------------------
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const productController = require('./controllers/product.controller');

app.get('/', (req, res) => {
  res.send('Ok');
});

app.get('/categories', productController.getCategories);


app.get('/products', productController.getProducts);


app.get('/products/:id', productController.getProductDetail);
// -----------------------


//-----------------------------
// Import các route giỏ hàng
const cartRoutes = require('./routes/cart'); 

// Sử dụng routes giỏ hàng
app.use('/cart', cartRoutes);
//---------------------------------




const { verifyToken, isAdmin } = require("./middleware/auth-middleware");

app.use(express.json());
app.get("/", cors(), (req, res) => res.send("Sever running"));

// app.use("/danhmucs", cors(), verifyToken, isAdmin, DanhMucRoutes);
app.use("/auth", cors(), authRoutes);
app.use("/congthuc", cors(), Congthuc);
app.use("/khuyenmai", cors(), KhuyenMai);
app.use("/dinhduong", cors(), DinhDuongRoutes);
app.use("/admin/order", orderRoutes);

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017/?directConnection=true", {
    dbName: "ambro_db",
  });

  console.log("mongodb connected");
}

connectDb().catch((err) => {
  console.error(err);
});

app.listen(port, () => console.log("Sever running on port", port));
