const express = require('express');
const passport = require("passport");

const controller = require('../controllers/product');

const router = express.Router();

//localhost:5200/api/product
router.post('/', passport.authenticate('jwt', {session: false}), controller.create);
//localhost:5200/api/product/id
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);
//localhost:5200/api/product/id
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove);

module.exports = router;