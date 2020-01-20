const express = require('express');
const router = express.Router();
const Api = require('../util/API');

/* GET home page. */
router.get('/', (req, res) => {
  res.sendStatus(501)
});

const cityList = ['dallas', 'detroit', 'manhattan'];
router.get('/favicon.ico', (req, res) => res.sendStatus(204));


router.get('/cities', (req, res)=> res.send(200).json(cityList));
router.get('/weather/:city', async (req, res) => {
  
  const { city } = req.params;
  console.log(city);
  cityList.indexOf(city) === -1 ? res.sendStatus(404) : '';

  const query = { location: city, format: 'json' };

  const result = await Api(query);
  console.log('result => ', result)

  res.status(200).json(result);

});
module.exports = router;
