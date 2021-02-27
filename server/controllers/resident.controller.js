const Resident = require('../models/resident');

exports.findAll = (req, res) => {
  Resident.find()
    .then((residents) => res.json(residents)).catch((err) => res.status(400).send(err));
};

exports.post = (req, res) => {
  const resident = new Resident(req.body);

  resident.save().then(() => res.status(201).json(resident)).catch((err) => {
    if (err.name === 'ValidationError') {
      res.status(422).json(err);
    } else {
      res.status(500).json(err);
    }
  });
};

exports.byId = (req, res, next) => {
  Resident.findById(req.params.id)
    .then((resident) => {
      if (resident) {
        req.resident = resident;
        return next();
      }
      return res.sendStatus(404);
    }).catch((err) => res.send(err));
};

exports.getById = (req, res) => {
  res.json(req.resident);
};

exports.delete = (req, res) => {
  const { resident } = req;
  resident.remove().then(() => res.sendStatus(204)).catch((err) => res.status(400).json(err));
};
