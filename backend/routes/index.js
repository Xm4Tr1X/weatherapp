const express = require('express');
const router = express.Router();
const Api = require('../util/API');

/* GET home page. */
router.get('/', (req, res) => {
  res.sendStatus(501)
});

const cityList = ['dallas', 'detroit', 'manhattan'];
router.get('/favicon.ico', (req, res) => res.sendStatus(204));


router.get('/cities', (req, res) => res.status(200).json(cityList));


router.get('/weather', async (req, res) => {

  const { cities } = req.query;
  if (cities === undefined) {
    return res.sendStatus(422);
  }
  const cityData = [];
  for (let i = 0; i < cities.length; i++) {
    const query = { location: cities[i], format: 'json' };
    const result = await Api(query);
    cityData.push(result);
  }
  return res.status(200).json(cityData);
});
module.exports = router;
