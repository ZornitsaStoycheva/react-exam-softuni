const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true,
        minLength: 2
    },
    model: {
        type: String,
        required: true,
        minLength: 2
    },
    transmission: {
        type: String,
        required: true,
        minLength: 6
    },
    color: {
        type: String,
        required: true,
        minLength: 3
    },
    desc: {
        type: String,
        required: true,
        minLength: 10
    },
    image: {
        type: String,
        required: true,
        minLength: 10
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
})

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;