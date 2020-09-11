const express = require("express");

function routes(GroceriesList) {
  const router = express.Router();
  // Middleware
  router.use("/groceries-list/:id", (req, res, next) => {
    GroceriesList.findById(req.params.id, (err, groceriesList) => {
      if (err) {
        return res.send(err);
      }
      if (groceriesList) {
        req.waterGallon = groceriesList;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  router
    .route("/groceries-list")
    .get((req, res) => {
      GroceriesList.find({}, (err, groceriesList) => {
        if (err) {
          return res.send(err);
        }
        return res.json(groceriesList);
      });
    })
    .post((req, res) => {
      const groceriesList = new GroceriesList(req.body);

      groceriesList.creationDate = new Date();
      groceriesList.save((err) => {
        if (err) {
          return res.send(err);
        }
        return res.status(201).json(groceriesList);
      });
    });

  router
    .route("/groceries-list/:id")
    .get((req, res) => res.json(req.groceriesList))
    .put((req, res) => {
      const { groceriesList } = req;
      groceriesList.name = req.body.name;
      groceriesList.market = req.body.market;
      groceriesList.marketDate = req.body.marketDate;
      groceriesList.items = req.body.items;
      groceriesList.save();
      return res.json(groceriesList);
    });

  return router;
}

module.exports = routes;
