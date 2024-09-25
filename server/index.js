const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { origin } = require('./config/config');
const router = require('./routes');
const {authMiddaweare} = require('./middlewares/authMiddleware')

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin: origin,
    credentials: true
}))

app.use(authMiddaweare)

mongoose.connect(`mongodb://localhost:27017/cars`)
.then(() => {
    console.log('Database Cars Store is connected');

    app.listen(PORT, () => console.log(`Server listaning on the port: ${PORT}`));
}).catch((err) => {
    console.log('DATABASE cannot cannected!');
})

app.use('/api', router)


  