const express = require('express');
const router = express.Router();
const User  = require('../models/UserModel');

router.post('/', async (req, res) => {
    const { name, phone, password } = req.body;

    const newUser = new User({
        name,
        phone,
        password,
    });

    try {
        await newUser.save();
        res.status(201).send('Logged in successfully');
    } catch (error) {
        if (error.code === 11000) { 
            return res.status(400).send('Phone number already exists');
        }
        res.status(500).send('Failed to log in');
    }
});

module.exports = router;
