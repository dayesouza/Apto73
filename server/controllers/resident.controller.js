const Resident = require("../models/resident");

exports.findAll = (req, res) => {
  Resident.find()
  .then(residents => {
    return res.json(residents);
  }).catch(err => {
    return res.status(400).send(err);
  })
}

exports.post = (req, res) => {
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
}

exports.byId = (req, res, next) => {
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
};

exports.getById = (req, res) => {
  res.json(req.resident);
}

exports.delete = (req, res) => {
  const { resident } = req;
  resident.remove().then(r => {
    return res.sendStatus(204);
  }).catch(err => {
    return res.status(400).json(err)
  });
}