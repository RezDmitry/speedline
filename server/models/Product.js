const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    default: 'undefined',
  },
  number: {
    type: String,
    required: 'undefined',
  },
  purchasingTechnology: {
    type: String,
    required: true,
  },
  shippingMethod: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  warehouse: {
    ref: 'warehouses',
    type: Schema.Types.ObjectId,
  }
});

module.exports = mongoose.model('products', ProductSchema);