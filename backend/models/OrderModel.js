const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    dish1: { type: String, required: true },
    quantity1: { type: Number, required: true },
    dish2: { type: String },
    quantity2: { type: Number },
    dish3: { type: String },
    quantity3: { type: Number },
    dish4: { type: String },
    quantity4: { type: Number }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = { Order };
