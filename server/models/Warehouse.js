const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: [20, 'Must be less than 21 characters, got {VALUE}'],
  },
  products: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  length: {
    type: Number,
    required: true,
    max: [9999, 'Must be less than 10000, got {VALUE}'],
  },
  width: {
    type: Number,
    required: true,
    max: [9999, 'Must be less than 10000, got {VALUE}'],
  },
  height: {
    type: Number,
    required: true,
    max: [9999, 'Must be less than 10000, got {VALUE}'],
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('warehouses', WarehouseSchema);