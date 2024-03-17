const Cinema = require('../models/model.cinema');

exports.getAllCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find();
    res.json(cinemas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCinema = async (req, res) => {
  try {
    const newCinema = new Cinema(req.body);
    const savedCinema = await newCinema.save();
    res.status(201).json(savedCinema);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCinema = async (req, res) => {
  try {
    const updatedCinema = await Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCinema) {
      return res.status(404).json({ message: 'Cinema not found' });
    }
    res.json(updatedCinema);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCinema = async (req, res) => {
  try {
    const deletedCinema = await Cinema.findByIdAndDelete(req.params.id);
    if (!deletedCinema) {
      return res.status(404).json({ message: 'Cinema not found' });
    }
    res.json({ message: 'Cinema deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};