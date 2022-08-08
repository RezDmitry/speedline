const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: [2, 'Must be at least 2 characters, got {VALUE}'],
    max: [20, 'Must be less than 20 characters, got {VALUE}'],
  },
  length: {
    type: Number,
    required: true,
    max: [6, 'Must be less than 7 characters, got {VALUE}'],
  },
  width: {
    type: Number,
    required: true,
    max: [6, 'Must be less than 7 characters, got {VALUE}'],
  },
  height: {
    type: Number,
    required: true,
    max: [6, 'Must be less than 7 characters, got {VALUE}'],
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('warehouses', WarehouseSchema);