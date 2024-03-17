const Movie = require('../models/model.movies');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getMovieByTitle = async (req, res) => {
  try {
    const movie = await Movie.findOne({ title: req.params.title });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMoviesByGenre = async (req, res) => {
  try {
    const movies = await Movie.find({ genre: req.params.genre });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getMoviesReleasedAfterYear = async (req, res) => {
  try {
    const movies = await Movie.find({ year: { $gte: parseInt(req.params.year) } });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
