const passport = require('passport');

const water = require("../api/waterGallon/waterGallon");
const waterGallonService = require("../api/waterGallon/waterGallonService")(
  water
);

const groceriesList = require("../api/groceriesList/groceriesList");
const groceriesListService = require("../api/groceriesList/groceriesListService")(
  groceriesList
);

module.exports = function (server) {
  server.use('/api', passport.authenticate('oauth-bearer', { session: false }));
  server.use("/api", waterGallonService);
  server.use("/api", groceriesListService);
};
