const errorHandler = require("../utils/errorHandler");
const Product = require('../models/Product');
const Warehouse = require('../models/Warehouse');

module.exports.getAll = async (req, res) => {
  try {
    const products = await Product
      .find({
        user: req.user.id,
        warehouse: req.query.warehouse,
      })
    res.status(200).json(products);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.create = async (req, res) => {
  try {
    const product = await new Product({
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      number: req.body.number,
      purchasingTechnology: req.body.purchasingTechnology,
      shippingMethod: req.body.shippingMethod,
      paymentMethod: req.body.paymentMethod,
      warehouse: req.body.warehouse,
    }).save();
    await Warehouse.findOneAndUpdate(
      {_id: req.body.warehouse},
      {$push: {products: product._id}},
    );
    res.status(201).json(product);
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.update = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      {_id: req.params.id},
      {$set: req.body},
      {new: true},
    );
    res.status(200).json(product)
  } catch (e) {
    errorHandler(res, e);
  }
}

module.exports.remove = async (req, res) => {
  try {
    await Product.remove({_id: req.params.id});
    await Warehouse.findOneAndUpdate(
      {_id: req.body.warehouse},
      {$pull: {products: req.params.id}},
    );
    res.status(200).json({
      message: 'Product deleted',
    })
  } catch (e) {
    errorHandler(res, e);
  }
}