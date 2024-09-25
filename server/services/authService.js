const { SECRET } = require('../config/config');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.getUsers = () => User.find();

exports.login = async (authData) => {
    const {email, password, username } = authData;
    const user = await User.findOne({ email: authData.email });

    if(!user) {
        throw new Error('Cannot find email or password!')
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Cannot find email or password');
    }

   return generationToken(user)
}

exports.register = async (authData) => {
    const {username, email, password, rePassword } = authData;
    const user = await User.findOne({ email: email });
    if(user) {
        throw new Error('Email alredy exits!');
    }

    if(password != rePassword) {
        throw new Error('Password missmatch!')
    }

    const validUser = await User.create(authData);
    return generationToken(validUser);
}

exports.logout = async (req, res) => {
    
}

function generationToken(user) {
    const token = jwt.sign({
        userId: user._id,
        username: user.username,
        email: user.email
    }, SECRET, { expiresIn: '1h'})

    return {
        userId: user._id,
        username: user.username,
        email: user.email,
        token: token
    }
}
