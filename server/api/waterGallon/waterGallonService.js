const express = require("express");

function routes(WaterGallon) {
  const router = express.Router();
  // Middleware
  router.use("/water-gallons/:id", (req, res, next) => {
    WaterGallon.findById(req.params.id, (err, waterGallon) => {
      if (err) {
        return res.send(err);
      }
      if (waterGallon) {
        req.waterGallon = waterGallon;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  router
    .route("/water-gallons")
    .get((req, res) => {
      WaterGallon.find({}, (err, waterGallons) => {
        if (err) {
          return res.send(err);
        }
        return res.json(waterGallons);
      });
    })
    .post((req, res) => {
      const waterGallon = new WaterGallon(req.body);

      waterGallon.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.status(201).json(waterGallon);
      });
    });

  router
    .route("/water-gallons/:id")
    .get((req, res) => res.json(req.waterGallon))
    .put((req, res) => {
      const { waterGallon } = req;
      waterGallon.user = req.body.user;
      waterGallon.value = req.body.value;
      waterGallon.date = req.body.date;
      waterGallon.save();
      return res.json(waterGallon);
    });

  return router;
}

module.exports = routes;
