const mongoose = require("mongoose");
const Movies = require("../models/model.movies");

// Datos de la semilla
const seedMovies = [
  {
    title: 'The Matrix',
    director: 'Hermanas Wachowski',
    year: 1999,
    genre: 'Acción',
  },
  {
    title: 'The Matrix Reloaded',
    director: 'Hermanas Wachowski',
    year: 2003,
    genre: 'Acción',
  },
  {
    title: 'Buscando a Nemo',
    director: 'Andrew Stanton',
    year: 2003,
    genre: 'Animación',
  },
  {
    title: 'Buscando a Dory',
    director: 'Andrew Stanton',
    year: 2016,
    genre: 'Animación',
  },
  {
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'Ciencia ficción',
  },
  {
    title: '50 primeras citas',
    director: 'Peter Segal',
    year: 2004,
    genre: 'Comedia romántica',
  },
];

// Conexión a MongoDB
mongoose.connect("mongodb+srv://paulabenitoc:rjIkJXoz7T8MglCJ@cluster0.b1tjh5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// Añadir los datos a MongoDB
const seedDB = async () => {
  await Movies.deleteMany({});
  await Movies.insertMany(seedMovies);
}

// Cierre de la conexión 
seedDB().then(() => {
  mongoose.connection.close();
});

//module.exports = seedMovies