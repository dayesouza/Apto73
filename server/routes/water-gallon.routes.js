module.exports = app => {
  const router = require('express').Router();
  const waterGallon = require("../controllers/water-gallon.controller");
  
  router.use("/:id", waterGallon.byId)
  router.get('/', waterGallon.findAll);
  router.get('/:id', waterGallon.getById);
  router.put('/:id', waterGallon.update);
  router.delete('/:id', waterGallon.delete);
  
  app.use('/api/water-gallons', router);
}