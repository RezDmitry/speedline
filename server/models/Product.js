const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: [1, 'Must be at least 2 characters, got {VALUE}'],
    max: [30, 'Must be less than 31 characters, got {VALUE}'],
  },
  manufacturer: {
    type: String,
    default: true,
    min: [1, 'Must be at least 2 characters, got {VALUE}'],
    max: [30, 'Must be less than 31 characters, got {VALUE}'],
  },
  number: {
    type: String,
    default: true,
    min: [1, 'Must be at least 2 characters, got {VALUE}'],
    max: [30, 'Must be less than 31 characters, got {VALUE}'],
  },
  purchasingTechnology: {
    type: String,
    required: true,
    enum: {
      values: ['A', 'S', 'D', 'F'],
      message: '{VALUE} is not supported',
    }
  },
  shippingMethod: {
    type: String,
    required: true,
    enum: ['AIR', 'SEA', 'TRUCK'],
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