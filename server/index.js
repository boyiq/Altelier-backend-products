const express = require('express');
const controllers = require('./controllers.js');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/product', controllers.getProduct);
app.get('/styles', controllers.getStyles);
app.get('/related', controllers.getRelated)

app.listen(port);
console.log(`Listening at http://localhost:${port}`)