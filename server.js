const fastify = require('fastify')({
    https: {
        key: require('fs').readFileSync('key.pem'),
        cert: require('fs').readFileSync('cert.pem')
    }
});
const connectDB = require('./database/connection');
const routes = require('./routes');
require('dotenv').config();

fastify.register(require('@fastify/helmet'));
fastify.register(require('@fastify/cors'));
fastify.register(routes);

const startServer = async () => {
    try {
        await connectDB();
        await fastify.listen({ port: process.env.PORT });
        console.log(`Server running on https://localhost:${process.env.PORT}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
