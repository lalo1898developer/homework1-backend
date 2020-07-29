const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const api = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Homework1-Backend API',
            description: 'Es una de 2 tareas para buscar la oportunidad de entrar a un proyecto con Raiffeisen Latina\n\n ***\n ## Descripción:\n **Desarrollar una api en ExpressJS y montarla en Heroku.**\n * La api debe traer una lista de items que contengan los campos: id, name, price, quantity; agregar al menos 20 items con cantidades (quantity) diferentes a 1. Generar url.\n * La api debe traer el total. Generar url\n * La api debe traer el promedio de los precios. Generar url',
            contact: {
                name: 'Eduardo Rodriguez Ricardez'
            },
            servers: ['https://homework1-backend.herokuapp.com/', 'http://localhost:3000']
        }
    },
    apis: ['./routers/ItemRouter.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


api.use(cors());
api.use(morgan('dev'));
api.use(express.urlencoded({ extended: true }));
api.use(express.json({ express: true }));
api.use('/api/', require('../routers'));
api.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

api.get('/', (req, res) => res.send('Esta viva y funcionando!'));

module.exports = { api, PORT };
