const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('all the beers');
});

module.exports = router;
