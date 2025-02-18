const Book = require('../models/Book');

exports.createBook = async (req, reply) => {
    try {
        const book = new Book(req.body);
        await book.save();
        reply.code(201).send(book);
    } catch (error) {
        reply.code(400).send(error);
    }
};

exports.getBooks = async (req, reply) => {
    try {
        const books = await Book.find({}, 'title author description format');
        reply.send(books);
    } catch (error) {
        reply.code(500).send(error);
    }
};

exports.getBookById = async (req, reply) => {
    try {
        const book = await Book.findById(req.params.id, 'title author description format');
        if (!book) return reply.code(404).send({ message: 'Book not found' });
        reply.send(book);
    } catch (error) {
        reply.code(500).send(error);
    }
};

exports.updateBook = async (req, reply) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, select: 'title author description format' });
        if (!book) return reply.code(404).send({ message: 'Book not found' });
        reply.send(book);
    } catch (error) {
        reply.code(500).send(error);
    }
};

exports.deleteBook = async (req, reply) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return reply.code(404).send({ message: 'Book not found' });
        reply.send({ message: 'Book deleted' });
    } catch (error) {
        reply.code(500).send(error);
    }
};
