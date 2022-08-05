const express = require('express');

const controller = require('../controllers/product');

const router = express.Router();

//localhost:5200/api/product
router.post('/', controller.create);
//localhost:5200/api/product/id
router.patch('/:id', controller.update);
//localhost:5200/api/product/id
router.delete('/:id', controller.remove);

module.exports = router;