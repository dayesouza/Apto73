const mongoose = require("mongoose");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const container = process.env.CONTAINER;
const database_name = process.env.DATABASE_NAME;

const mongoUrl = `mongodb+srv://${username}:${password}@${container}-0u4ah.azure.mongodb.net/${database_name}?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
