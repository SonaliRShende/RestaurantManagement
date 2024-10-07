const express = require('express');
const router = express.Router();
const  Reservation  = require('../models/ReservationModel');

router.post('/', async (req, res) => {
    const { name, contactNumber, numPersons, reservationDate, reservationTime } = req.body;

    const newReservation = new Reservation({
        name,
        contactNumber,
        numPersons,
        reservationDate,
        reservationTime
    });

    try {
        await newReservation.save();
        res.status(201).send('Reservation successful');
    } catch (error) {
        res.status(500).send('Reservation failed');
    }
});

module.exports = router;
