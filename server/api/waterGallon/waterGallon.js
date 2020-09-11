const mongoose = require("mongoose");

const waterGallonSchema = new mongoose.Schema({
  user: { type: String, required: true },
  value: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("waterGallon", waterGallonSchema);
