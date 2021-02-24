const express = require('express');
const router = express.Router();

const data = [
  {
    name: 'Pondok Aren Permai',
    addr: 'Bintaro Sektor 12',
    price: 100000000
  },
  {
    name: 'Cirendeu Permai',
    addr: 'Jl Gunung Raya',
    price: 1504000000
  },
  {
    name: 'Sandratek Permai',
    addr: 'Jl Sandratek',
    price: 1650800000
  }
];

router.get('/', (req, res) => {
  res.json(data);
  res.status(200).end();
});

router.post('/', (req, res) => {
  const body = req.body;
  console.warn(body);
  data.push(body);
  res.status(200).end();
});

router.delete('/', (req, res) => {
  const id = req.query.id;
  data.splice(id-1, 1)
  res.status(200).end();
});

module.exports = router;
