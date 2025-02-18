const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    format: { type: String, enum: ['poche', 'manga', 'audio'], default: 'poche' }
});

module.exports = mongoose.model('Book', bookSchema);
