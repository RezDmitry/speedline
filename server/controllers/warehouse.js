const Warehouse = require('../models/Warehouse');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const warehouses = await Warehouse.find({
      user: req.user.id,
    })
    res.status(200).json(warehouses);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.getById = async (req, res) => {
  try {

  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.create = async (req, res) => {
  try {

  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.update = async (req, res) => {
  try {

  } catch (e) {
    errorHandler(res, e);
  }
}