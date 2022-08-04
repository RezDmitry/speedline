const express = require('express');
const router = express.Router();
const controller = require('../controllers/warehouse');

//localhost:5200/api/warehouse
router.get('/', controller.getAll);
//localhost:5200/api/warehouse/:id
router.get('/:id', controller.getById);
//localhost:5200/api/warehouse
router.post('/', controller.create);
//localhost:5200/api/warehouse/:id
router.patch('/:id', controller.update);


module.exports = router;