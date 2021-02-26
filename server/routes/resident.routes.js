module.exports = app => {
  const router = require('express').Router();
  const resident = require("../controllers/resident.controller");
  
  router.use("/:id", resident.byId);

  router.get('/', resident.findAll);
  router.get('/:id', resident.getById);
  router.delete('/:id', resident.delete);
  
  app.use('/api/residents', router);
}