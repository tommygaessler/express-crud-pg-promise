const express = require('express');
const router = express.Router();

const db = require('../db/connection');

router.get('/', function (req, res, next) {
  // get data from database
  db.any('SELECT * FROM beer', [true])
    .then(function (beers) {
      // send beers back
      res.send(beers);
    })
    .catch(function (error) {
      next(error);
    });
});

router.get('/:id', function (req, res, next) {
  const beerID = parseInt(req.params.id);

  db.any(`SELECT * FROM beer WHERE id = ${beerID}`, [true])
    .then(function (beer) {

      if (beer.length) {
        res.send(beer[0]);
      } else {
        res.status(422).send({
          status: 'error',
          message: 'That beer doesn\'t exist'
        });
      }
    })
    .catch(function (error) {
      next(error);
    });
});

router.post('/', function (req, res, next) {

  const newBeer = {
    name: req.body.name,
    abv: parseInt(req.body.abv),
    brand: req.body.brand,
    style: req.body.style
  }

  db.any(`INSERT INTO beer (name, abv, brand, style) VALUES('${newBeer.name}', ${newBeer.abv}, '${newBeer.brand}', '${newBeer.style}')`, [true])
    .then(function (beers) {
      res.send('yolo');
    })
    .catch(function (error) {
      next(error);
    });
});

module.exports = router;
