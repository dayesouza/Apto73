const mongoose = require("mongoose");

const residentsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  birthday: { type: Date, required: true },
  },  
  {
  strict: true,
  versionKey: false,
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
});

module.exports = mongoose.model("resident", residentsSchema);
