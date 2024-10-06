const express = require('express');
const router = express.Router();
const Order = require('../models/OrderModel');

router.post('/', async (req, res) => {
    const { name, phone, location, dish1, quantity1, dish2, quantity2, dish3, quantity3, dish4, quantity4 } = req.body;

    const newOrder = new Order({
        name,
        phone,
        location,
        dish1,
        quantity1,
        dish2,
        quantity2,
        dish3,
        quantity3,
        dish4,
        quantity4
    });

    try {
        await newOrder.save();
        res.status(201).send('Order placed successfully');
    } catch (error) {
        res.status(500).send('Failed to place order');
    }
});

module.exports = router;
