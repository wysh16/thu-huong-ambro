const KhuyenMai = require("./../db/khuyenmai");

async function addKhuyenMai(model) {
  let promotion = new KhuyenMai({
    ...model,
  });
  await promotion.save();
  return promotion.toObject();
}

async function updateKhuyenMai(id, model) {
  await Promotion.findByIdAndUpdate(id, model);
}

async function deleteKhuyenMai(id) {
  await Promotion.findByIdAndDelete(id);
}

async function getAllKhuyenMai() {
  let promotions = await KhuyenMai.find();
  return promotions.map((x) => x.toObject());
}

async function getKhuyenMai(id) {
  let promotion = await KhuyenMai.findById(id);
  return promotion ? promotion.toObject() : null;
}

module.exports = {
  addKhuyenMai,
  updateKhuyenMai,
  deleteKhuyenMai,
  getAllKhuyenMai,
  getKhuyenMai,
};
