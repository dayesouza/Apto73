const mongoose = require('mongoose');

const groceriesListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
  creationDate: { type: Date, required: true },
  market: { type: String, required: true },
  marketDate: { type: Date },
});

module.exports = mongoose.model('groceriesList', groceriesListSchema);
