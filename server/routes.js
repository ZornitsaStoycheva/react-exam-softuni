const router = require('express').Router();
const authController = require('./controllers/authController');
const carController = require('./controllers/carController');
const homeController = require('./controllers/homeController');

router.use('/', homeController);
router.use('/auth', authController);
router.use('/cars',  carController);


module.exports = router;