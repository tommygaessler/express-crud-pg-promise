const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const db = require('../db/connection');

// method 2
router.get('/', function (req, res, next) {
  const data = queries.getAll('beer', function(err, result) {
    if (err) {
      next(err);
    } else {
      res.send(result);
    }
  });
});

// method 2 put request
router.put('/:id', function(req, res, next) {
  const beerID = parseInt(req.params.id);

  db.any(`UPDATE beer SET abv = 2 WHERE id = ${beerID}`, [true])
    .then(function(beers) {
      res.send('send seomthing back')
    })
    .catch(function(error) {
      next(error);
    });
});

// router.get('/:id', function (req, res, next) {
//   const beerID = parseInt(req.params.id);
//
//   db.any(`SELECT * FROM beer WHERE id = ${beerID}`, [true])
//     .then(function (beer) {
//
//       if (beer.length) {
//         res.send(beer[0]);
//       } else {
//         res.status(422).send({
//           status: 'error',
//           message: 'That beer doesn\'t exist'
//         });
//       }
//     })
//     .catch(function (error) {
//       next(error);
//     });
// });
//
// router.post('/', function (req, res, next) {
//
//   const newBeer = {
//     name: req.body.name,
//     abv: parseInt(req.body.abv),
//     brand: req.body.brand,
//     style: req.body.style
//   }
//
//   db.any(`INSERT INTO beer (name, abv, brand, style) VALUES('${newBeer.name}', ${newBeer.abv}, '${newBeer.brand}', '${newBeer.style}')`, [true])
//     .then(function (beers) {
//       res.send('yolo');
//     })
//     .catch(function (error) {
//       next(error);
//     });
// });

module.exports = router;
