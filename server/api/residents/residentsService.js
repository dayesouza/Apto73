const express = require("express");

function routes(Resident) {
  const router = express.Router();

  router.use("/resident/:id", (req, res, next) => {
    Resident.findById(req.params.id)
    .then(resident => {
      if (resident) {
        req.resident = resident;
        return next();
      }
      return res.sendStatus(404);
    }).catch(err => {
      return res.send(err);
    })
  });

  router
  .route("/residents")
  .get((req, res) => {
    Resident.find({})
    .then(residents => {
      return res.json(residents);
    }).catch(err => {
      return res.status(400).send(err);
    })
  })
  .post((req, res) => {
    const resident = new Resident(req.body);
    
    resident.save().then(_ => {
      return res.status(201).json(resident)
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

  return router;
}

module.exports = routes;
