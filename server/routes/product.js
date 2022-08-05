const express = require('express');

const controller = require('../controllers/product');

const router = express.Router();

//localhost:5200/api/product
router.post('/', controller.create);

module.exports = router;