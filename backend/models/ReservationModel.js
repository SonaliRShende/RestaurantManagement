const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    numPersons: { type: Number, required: true },
    reservationDate: { type: Date, required: true },
    reservationTime: { type: String, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports =  Reservation ;
