const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('./mongo');
const loginRoute = require('./routes/loginRoute');
const orderRoute = require('./routes/orderRoute');
const reservationRoute = require('./routes/reservationRoute');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Routes
app.use('/api/login', loginRoute);
app.use('/api/order', orderRoute);
app.use('/api/reservation', reservationRoute);

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/menu', (req, res) => res.sendFile(path.join(__dirname, 'public', 'menu.html')));
app.get('/order', (req, res) => res.sendFile(path.join(__dirname, 'public', 'order.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'public', 'reservation.html')));


// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
