const express = require('express');

const router = express.Router();

const { ItemController } = require('../controllers');

/**
 * @swagger
 * /api/items:
 *  get:
 *   description: Regresa un Array con todos los items como objeto
 *   responses:
 *    '200':
 *      description: Petición Exitosa
 *    '400':
 *      description: Error en la petición
 */
router.get('/items/', ItemController.readAll);

/**
 * @swagger
 * /api/items/total:
 *  get:
 *   description: Regresa un número, el cual representa la suma de todos los valores de la llave "quantity" de los items
 *   responses:
 *    '200':
 *      description: Petición Exitosa
 *    '400':
 *      description: Error en la petición
 */
router.get('/items/total', ItemController.readTotal);

/**
 * @swagger
 * /api/items/average:
 *  get:
 *   description: Regresa un número, el cual representa el promedio de todos los valores de la llave "price" de los items
 *   responses:
 *    '200':
 *      description: Petición Exitosa
 *    '400':
 *      description: Error en la petición
 */
router.get('/items/average', ItemController.readAverage);

module.exports = router;
