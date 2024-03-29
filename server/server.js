const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const petsitterRoutes = require('./routes/petsitterRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const cors = require("cors");
const dotenv = require("dotenv");

// Create Express app
const app = express();

// Middleware
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/petsitters', petsitterRoutes);
app.use('/api/reviews', reviewRoutes);

// MongoDB connection
const mongoURI = process.env.MONGO_URL; // Replace with your MongoDB connection URI

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// User model
const User = require('./models/User');


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
