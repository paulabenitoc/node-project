const express = require('express');
const router = express.Router();
const movieController = require('../controllers/controller.movies');

// Endpoints
router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.get('/title/:title', movieController.getMovieByTitle);
router.get('/genre/:genre', movieController.getMoviesByGenre);
router.get('/year/:year', movieController.getMoviesReleasedAfterYear);
router.post('/', movieController.createMovie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports = router;