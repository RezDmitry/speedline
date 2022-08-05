const express = require('express');
const passport = require('passport');

const controller = require('../controllers/warehouse');

const router = express.Router();

//localhost:5200/api/warehouse
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll);
//localhost:5200/api/warehouse/:id
router.get('/:id', controller.getById);
//localhost:5200/api/warehouse
router.post('/', controller.create);
//localhost:5200/api/warehouse/:id
router.patch('/:id', controller.update);


module.exports = router;