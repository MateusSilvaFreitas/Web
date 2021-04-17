const express = require('express');
const app = express();
const booksRoute = require('./route/booksRoute');

app.use(express.json());

app.use(booksRoute);
app.listen(3333)