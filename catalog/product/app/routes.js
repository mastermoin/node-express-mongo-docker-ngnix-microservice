module.exports = function(app) {

    ProductModel = require('../node_modules/shared-model-for-ecom-example/product');
    ProductCtrl = require('./controller.js');

    const RESOURCE_PATH_V1 = '/api/v1/products/';
    
    app.post(RESOURCE_PATH_V1 , async (req, res) => {
        var product = req.body;
        savedProduct = await ProductCtrl.addProduct(product);
        res.status(201);
        res.json(savedProduct); 
    });
};