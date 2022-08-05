const errorHandler = require("../utils/errorHandler");
const Product = require('../models/Product');

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
    res.status(201).json(product);
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

module.exports.remove = async (req, res) => {
  try {
    await Product.remove({_id: req.params.id});
    res.status(200).json({
      message: 'Product deleted',
    })
  } catch (e) {
    errorHandler(res, e);
  }
}