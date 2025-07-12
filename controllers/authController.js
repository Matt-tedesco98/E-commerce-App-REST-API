const userModel = require('../models/userModel');
const bcript = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;
    if (!email || !password || !firstname || !lastname) {
        res.status(400).json({ message: 'Missing required fields' });
    }

    try{
        const existingUser = await userModel.findUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcript.hash(password, 10);
        const newUser = await userModel.createUser({ email, hashedPassword, firstname, lastname });
        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
            }
        });
    } catch (err) {
        console.error('register error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    // TODO: implement login logic
};

module.exports = {
    registerUser,
    loginUser,
};