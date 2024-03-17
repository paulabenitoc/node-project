// Imports
const express = require('express');
const mongoose = require('mongoose');

const { connectMongo } = require("./src/data/mongo");

const movieRoutes = require('./src/api/routes/routes.movies');
const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect('mongodb+srv://paulabenitoc:rjIkJXoz7T8MglCJ@cluster0.b1tjh5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes sin request body
app.use('/movies', movieRoutes);


// Middleware, Body de las requests formato JSON
app.use(express.json());

// Routes con request body JSON
app.use('/movies/:id', movieRoutes);
app.use('/movies/title/:title', movieRoutes);
app.use('/movies/genre/:genre', movieRoutes);
app.use('/movies/year/:year', movieRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});