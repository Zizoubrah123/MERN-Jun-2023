const PersonController = require('../controller/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/product/new', PersonController.create);
    app.get('/api/product', PersonController.getAllproducts);
    app.get('/api/product/:id', PersonController.getOne);
    app.put('/api/product/:id', PersonController.updateProduct);
    app.delete('/api/product/:id', PersonController.delete);



}