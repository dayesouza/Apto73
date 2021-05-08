require('dotenv').config();
const mongoose = require('mongoose');

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const container = process.env.CONTAINER;
const databaseName = process.env.DB_NAME;

let mongoUrl = `mongodb+srv://${username}:${password}@${container}.0u4ah.azure.mongodb.net/${databaseName}?retryWrites=true&w=1`;
if (process.env.NODE_ENV.toLocaleLowerCase() === 'local') {
  mongoUrl = 'mongodb://127.0.0.1:27017/apto73';
}
module.exports = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
