const express = require('express');

const router = express.Router();

const { ItemController } = require('../controllers');

router.get('/items/', ItemController.readAll);
router.get('/items/total', ItemController.readTotal);
router.get('/items/average', ItemController.readAverage);

module.exports = router;
