const router = require('express').Router();
const homeService = require('../services/homeService');
const carService = require('../services/carService');

router.get('/', async (req, res) => {
    const cars = await homeService.getHome();
    res.json(cars)
})


module.exports = router;