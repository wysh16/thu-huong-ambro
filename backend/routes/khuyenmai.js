const express = require("express");
const {
  addKhuyenMai,
  updateKhuyenMai,
  deleteKhuyenMai,
  getAllKhuyenMai,
  getKhuyenMai,
} = require("../handlers/khuyenmai-handler");

const router = express.Router();

router.post("/", async (req, res) => {
  const model = req.body;
  const khuyenmai = await addKhuyenMai(model);
  res.send(khuyenmai);
});

router.put("/:id", async (req, res) => {
  const model = req.body;
  const id = req.params["id"];
  await updateKhuyenMai(id, model);
  res.send({ message: "Updated" });
});

router.delete("/:id", async (req, res) => {
  const id = req.params["id"];
  await deleteKhuyenMai(id);
  res.send({ message: "Deleted" });
});

router.get("/:id", async (req, res) => {
  const id = req.params["id"];
  const khuyenmai = await getKhuyenMai(id);
  res.send(khuyenmai);
});

router.get("/", async (req, res) => {
  const khuyenmais = await getAllKhuyenMai();
  res.send(khuyenmais);
});

module.exports = router;
