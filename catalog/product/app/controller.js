var mongoose = require ('mongoose');

var productModel = require('../node_modules/shared-model-for-ecom-example/product');
var productSchema = mongoose.Schema(Product);
var Product = module.exports = mongoose.model('products', productModel);

module.exports.addProduct = async (product ) => {
    return  await Product.create(product);
};