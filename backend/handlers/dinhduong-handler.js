const DinhDuong = require("./../db/dinhduong");

// async function getDinhDuong(id) {
//   let dinhduong = await DinhDuong.findById(id);
//   return dinhduong.toObject();
// }

async function addDinhDuong(model) {
  let dinhduong = new DinhDuong({
    ...model,
  });
  await dinhduong.save();
  return dinhduong.toObject();
}

async function updateDinhDuong(id, model) {
  await DinhDuong.findByIdAndUpdate(id, model);
}

async function deleteDinhDuong(id) {
  await DinhDuong.findByIdAndDelete(id);
}

async function getAllDinhDuong() {
  let dinhduongs = await DinhDuong.find();
  console.log("Fetched Dinh Duong:", dinhduongs);
  return dinhduongs.map((x) => x.toObject());
}

async function getDinhDuong(id) {
  let dinhduong = await DinhDuong.findById(id);
  return dinhduong ? dinhduong.toObject() : null;
}

module.exports = {
  addDinhDuong,
  updateDinhDuong,
  deleteDinhDuong,
  getAllDinhDuong,
  getDinhDuong,
};
