const express = require('express');
const morgan = require('morgan');
const path = require('path');
const controllers = require('./controllers.js');

const app = express();
const port = 3001;

app.use(morgan('dev'))
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/products', controllers.getProducts)
app.get('/products/:id', controllers.getProduct);
app.get('/products/:id/styles', controllers.getStyles);
app.get('/products/:id/related', controllers.getRelated);

app.listen(port);
console.log(`Listening at http://localhost:${port}`)