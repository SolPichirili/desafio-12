require('dotenv').config();
const express = require('express');
const productsRouter = require('./routers/products/products');
const cartRouter = require('./routers/cart/cart');
const minimistPort = require('./utils/minimist/minimist');
const infoRouter = require('./routers/info/info');
const randomRouter = require('./routers/random/randomRouter');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api/productos', productsRouter);
server.use('/api/carrito', cartRouter);
server.use('/info', infoRouter);
server.use('/api/randoms', randomRouter);

let port = minimistPort;

server.get('/', (req, res) => {
    res.json({mensaje: 'Funcionamiento correcto'});
});

const app = server.listen(port, ()=>{
    console.log(`Servidor corriendo en ${port.p}`);
});

app.on('error', (error)=>{
    console.log(`Error: ${error}`);
});