const router = require('express').Router();
const carServise = require('../services/carService');

router.get('/', async (req, res) => {
    const cars = await carServise.getAll();
    res.json(cars);
})

router.post('/create', async (req, res) => {
   const carData = req.body;
   
    try {
        const token = await carServise.create({...carData, owner: req.user.userId})
        
        res.status(201).json(token)

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.get('/:carId/details', async (req, res) => {
    try {
        const car = await carServise.getOne(req.params.carId);
        res.json(car);

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.put('/edit/:carId', async (req, res) => {
    try {
        const carId = req.params.carId;
        const car = req.body;
        const editCar = await carServise.update(carId, car);
        res.json(editCar);

    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

router.delete('/delete/:carId', async (req, res) => {
    try {
        await carServise.delete(req.params.carId);
        res.status(204).end();

    } catch (err) {
         res.status(400)
        .json({ message: err.message })
    }
})


router.post('/:carId/like', async (req, res) => {
    
    try {
        const car = await carServise.likes(req.params.carId, req.user?.userId);
        res.json(car)
    } catch (err) {
        res.status(400)
        .json({ message: err.message })
    }
})

module.exports = router;