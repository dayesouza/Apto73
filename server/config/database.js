const mongoose = require("mongoose");
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const container = process.env.CONTAINER;
const database_name = process.env.DATABASE_NAME;

let mongoUrl = `mongodb+srv://${username}:${password}@${container}-0u4ah.azure.mongodb.net/${database_name}?retryWrites=true&w=majority`;
if(process.env.NODE_ENV.toLocaleLowerCase() === 'dev') {
  mongoUrl = 'mongodb://127.0.0.1:27017/apto73'
}
module.exports = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
