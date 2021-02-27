const WaterGallon = require('../models/water-gallon');

exports.findAll = (req, res) => {
  WaterGallon.find()
    .then((waterGallons) => res.json(waterGallons)).catch((err) => res.status(400).send(err));
};

exports.post = (req, res) => {
  const waterGallon = new WaterGallon(req.body);

  waterGallon.save().then(() => res.status(201).json(waterGallon)).catch((err) => {
    if (err.name === 'ValidationError') {
      res.status(422).json(err);
    } else {
      res.status(500).json(err);
    }
  });
};

exports.byId = (req, res, next) => {
  WaterGallon.findById(req.params.id)
    .then((waterGallon) => {
      if (waterGallon) {
        req.waterGallon = waterGallon;
        return next();
      }
      return res.sendStatus(404);
    }).catch((err) => res.send(err));
};

exports.getById = (req, res) => {
  res.json(req.waterGallon);
};

exports.delete = (req, res) => {
  const { waterGallon } = req;
  waterGallon.remove().then(() => res.sendStatus(204)).catch((err) => res.status(400).json(err));
};

exports.update = (req, res) => {
  const { waterGallon } = req;
  waterGallon.user = req.body.user;
  waterGallon.value = req.body.value;
  waterGallon.date = req.body.date;
  waterGallon.save().then(() => res.json(waterGallon)).catch((err) => res.status(400).json(err));
};
