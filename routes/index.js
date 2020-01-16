const express = require('express');
const router = express.Router();
const Api = require('../util/API');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendStatus(501)
});

router.get('/favicon.ico', (req, res, next) => res.sendStatus(204));

router.get('/weather/:city', async (req, res) => {
  const cityList = ['dallas', 'detroit', 'manhattan'];
  const { city } = req.params;
  console.log(city);
  cityList.indexOf(city) === -1 ? res.sendStatus(404) : '';

  const query = { location: city, format: 'json' };

  const result = await Api(query);
  console.log('result => ', result)

  res.status(200).json(result);

});
module.exports = router;
