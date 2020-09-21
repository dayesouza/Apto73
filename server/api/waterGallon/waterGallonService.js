const express = require("express");

function routes(WaterGallon) {
  const router = express.Router();
  // Middleware
  router.use("/water-gallons/:id", (req, res, next) => {
    WaterGallon.findById(req.params.id)
    .then(waterGallon => {
      if (waterGallon) {
        req.waterGallon = waterGallon;
        return next();
      }
      return res.sendStatus(404);
    }).catch(err => {
      return res.send(err);
    })
  });

  router
    .route("/water-gallons")
    .get((req, res) => {
      WaterGallon.find({})
      .then(waterGallons => {
        return res.json(waterGallons);
      }).catch(err => {
        return res.status(400).send(err);
      })
    })
    .post((req, res) => {
      const waterGallon = new WaterGallon(req.body);
      
      waterGallon.save().then(_ => {
        return res.status(201).json(waterGallon)
      }).catch(err => {
        if (err.name == 'ValidationError') {
          console.error('Error Validating!', err);
          res.status(422).json(err);
        } else {
          console.error(err);
          res.status(500).json(err);
        }
      })
    });

  router
    .route("/water-gallons/:id")
    .get((req, res) => res.json(req.waterGallon))
    .delete((req, res) => {
      const { waterGallon } = req;
      console.log('DELETEEE')
      waterGallon.remove().then(r => {
        return res.sendStatus(204);
      }).catch(err => {
        return res.status(400).json(err)
      });
    })
    .put((req, res) => {
      const { waterGallon } = req;
      waterGallon.user = req.body.user;
      waterGallon.value = req.body.value;
      waterGallon.date = req.body.date;
      waterGallon.save().then(s => {
        return res.json(waterGallon);
      }).catch(err => {
        return res.status(400).json(err)
      });
    });

  return router;
}

module.exports = routes;
