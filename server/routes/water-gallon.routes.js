const router = require('express').Router();
const waterGallon = require('../controllers/water-gallon.controller');

module.exports = (app) => {
  router.get('/', waterGallon.findAll);
  router.post('/', waterGallon.post);
  router.use('/:id', waterGallon.byId);
  router.get('/:id', waterGallon.getById);
  router.put('/:id', waterGallon.update);
  router.delete('/:id', waterGallon.delete);

  app.use('/api/water-gallons', router);
};
