const express = require('express');
const morgan = require('morgan');

const api = express();
const PORT = process.env.PORT || 3000;

api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));

api.get('/', (req, res) => res.send('Esta viva y funcionando!'));

module.exports = { api, PORT };
