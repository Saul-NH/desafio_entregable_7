const express = require('express');
const productsRouter = require('./src/router/products.router');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productsRouter);

const server = app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
server.on('error', (error) => console.error(error));
