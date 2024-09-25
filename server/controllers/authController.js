const router = require('express').Router();
const authService = require('../services/authService');

router.get('/', async (req, res) => {
    const users = await authService.getUsers();
    res.json(users);
})

router.post('/login', async (req, res) => {
    const authData = req.body;
  
    try {
         const {token, userId, email, username} = await authService.login(authData);
         
        res.status(200).json({
            user: token,
            userId: userId,
            email: email,
            username: username
        })
    } catch (error) {
        res.status(400).json({
            message: 'Login failed!'
        })
    }
})

router.post('/register', async (req, res) => {
    const authData = req.body;
    try {
        const {token, userId, email, username} = await authService.register(authData);
        
        res.status(200).json({
            user: token,
            userId: userId,
            email: email,
            username: username
        })
    } catch (error) {
        res.status(400).json({
            message: 'Register failed!'
        })
    }
})

router.post('/logout', async (req, res) => {
    res.json({ ok: true })
})

module.exports = router;