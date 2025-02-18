const bookController = require('./controllers/bookController');

async function routes(fastify, options) {
    fastify.post('/books', bookController.createBook);
    fastify.get('/books', bookController.getBooks);
    fastify.get('/books/:id', bookController.getBookById);
    fastify.put('/books/:id', bookController.updateBook);
    fastify.delete('/books/:id', bookController.deleteBook);
}

module.exports = routes;
