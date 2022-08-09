const Warehouse = require('../models/Warehouse');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const warehouses = await Warehouse
      .find({user: req.user.id})
      .sort({'height': req.query.height === 'any' ? 0 : req.query.height})
    res.status(200).json(warehouses);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.getById = async (req, res) => {
  try {
    const warehouse = await Warehouse.findOne({_id: req.params.id});
    res.status(200).json(warehouse);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.create = async (req, res) => {
  try {
    const warehouse = await new Warehouse({
      name: req.body.name,
      length: req.body.length,
      width: req.body.width,
      height: req.body.height,
      user: req.user.id,
    }).save();
    res.status(201).json(warehouse);
  } catch (e) {
    errorHandler(res, e);
  }
}