module.exports = function(app) {

    ProductModel = require('../node_modules/shared-model-for-ecom-example/product');
    ProductCtrl = require('./controller.js');

    const RESOURCE_PATH_V1 = '/api/v1/products/';
    
    app.post(RESOURCE_PATH_V1 , (req, res) => {
        var product = req.body;
        ProductCtrl.addProduct(product, (err, savedProduct) => {
            if(err) {
                res.status(500);
                res.json({'message' : 'internal server error'});
            }
            res.status(201);
            res.json(savedProduct); 
        })
    });
};