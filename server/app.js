const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const warehouseRoutes = require('./routes/warehouse');
const productRoutes = require('./routes/product');
const app = express();

mongoose.connect('')
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/product', productRoutes);

module.exports = app;