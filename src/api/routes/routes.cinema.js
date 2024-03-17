const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/controller.cinema');

router.get('/', cinemaController.getAllCinemas);
router.post('/', cinemaController.createCinema);
router.put('/:id', cinemaController.updateCinema);
router.delete('/:id', cinemaController.deleteCinema);

module.exports = router;