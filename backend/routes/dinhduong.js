const express = require("express");

const {
  addDinhDuong,
  updateDinhDuong,
  deleteDinhDuong,
  getAllDinhDuong,
  getDinhDuong,
} = require("../handlers/dinhduong-handler");

const router = express.Router();

// Route để thêm dinh dưỡng
router.post("/", async (req, res) => {
  const model = req.body;
  const dinhduong = await addDinhDuong(model);
  res.status(201).send(dinhduong);
});

// Route để cập nhật dinh dưỡng theo ID
router.put("/:id", async (req, res) => {
  const model = req.body;
  const id = req.params["id"];
  await updateDinhDuong(id, model);
  res.send({ message: "Updated" });
});

// Route để xóa dinh dưỡng theo ID
router.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  await deleteDinhDuong(id);
  res.send({ message: "Deleted" });
});

// Route để lấy dinh dưỡng theo ID
router.get("/:id", async (req, res) => {
  const id = req.params["id"];
  const dinhduong = await getDinhDuong(id);
  if (dinhduong) {
    res.send(dinhduong);
  } else {
    res.status(404).send({ message: "Dinh duong not found" });
  }
});

// Route để lấy tất cả dinh dưỡng
router.get("/", async (req, res) => {
  try {
    const dinhduongs = await getAllDinhDuong();
    res.send(dinhduongs);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).send("Error retrieving data");
  }
});

router.get("/", async (req, res) => {
  try {
    const dinhduongs = await DinhDuong.find();
    console.log("Fetched Dinh Duong:", dinhduongs); // Log dữ liệu
    res.send(dinhduongs);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error retrieving data");
  }
});
module.exports = router;
