require("dotenv").config();
const BearerStrategy = require('passport-azure-ad').BearerStrategy;
const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const passport = require('passport');
const config = require('./auth-config');
const cors = require('cors');

const server = express();
server.use(cors({credentials: true, origin: true}))

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(helmet());

const bearerStrategy = new BearerStrategy(config, (token, done) => {
  // Send user info using the second argument
  done(null, {}, token);
});

server.use(passport.initialize());
passport.use(bearerStrategy);

server.get("/health-check", (req, res) => {
  res.json({healthCheck: 'ok'});
});

server.listen(process.env.PORT || 9980, function () {
  console.log("listening on");
});

module.exports = server;
