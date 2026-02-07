const express = require('express');
const userRoutes = require('./routes/userRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Custom Logger
app.use(logger);

// Routes
app.use('/', userRoutes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;