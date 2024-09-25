const Car = require('../models/Car');

exports.getHome = () => Car.find();

