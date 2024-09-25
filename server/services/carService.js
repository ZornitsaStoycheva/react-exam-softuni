const { query } = require('express');
const Car = require('../models/Car');
const User = require('../models/User');

exports.getAll = () => Car.find();

exports.create = async (carData, userId) => {
    const createCar = await Car.create({
        owner: userId,
        ...carData})

    await User.findByIdAndUpdate(userId, {$push: { createCar: createCar._id}});
    
    return createCar;
}

exports.getOne = (carId) => Car.findById(carId);

exports.update = (carId, carData) => Car.findByIdAndUpdate(carId, carData, { runValidators: true });

exports.delete = (carId) => Car.findByIdAndDelete(carId);

exports.likes = async (carId, userId) => {
    const car = await Car.findById(carId);
    const isValid = car.likes.some((like) => like?.toString() === userId);
    console.log(isValid)
    if(isValid) {
        return;
    }

    car.likes.push(userId);
    return car.save();
}

