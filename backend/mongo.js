const mongoose = require('mongoose');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/RestaurantManagement',)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));
