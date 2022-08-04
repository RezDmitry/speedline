const express = require('express');
const router = express.Router();
const controller = require('../controllers/product');

//localhost:5200/api/product
router.post('/', controller.create);

module.exports = router;