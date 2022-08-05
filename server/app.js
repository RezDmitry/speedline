const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const authRoutes = require('./routes/auth');
const warehouseRoutes = require('./routes/warehouse');
const productRoutes = require('./routes/product');
const { MONGO_URI } = require('./config/keys');

const app = express();

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/warehouse', warehouseRoutes);
app.use('/api/product', productRoutes);

module.exports = app;