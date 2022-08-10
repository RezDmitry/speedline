const Warehouse = require('../models/Warehouse');
const errorHandler = require('../utils/errorHandler');
const Product = require('../models/Product');

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

module.exports.update = async (req, res) => {
  try {
    const warehouse = await Warehouse.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true},
    );
    res.status(200).json(warehouse)
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Warehouse.findByIdAndRemove({_id: req.params.id});
    await Product
      .find({warehouse: req.params.id})
      .remove();
    res.status(200).json({
      message: 'Warehouse deleted',
    })
  } catch (e) {
    errorHandler(res, e);
  }
}