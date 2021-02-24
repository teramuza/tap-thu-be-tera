var express = require('express');
var router = express.Router();

/* GET home page. */

const data = [
  {
    name: 'Remis Putra',
    age: 20,
  },
  {
    name: 'Nanda Rizky Saputra Tafanao',
    age: 30,
  },
  {
    name: 'Sodichin Saputra',
    age: 10
  }
]

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
