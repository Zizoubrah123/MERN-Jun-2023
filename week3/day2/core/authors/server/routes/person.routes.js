const productController = require('../controller/person.controller');
module.exports = function(app){
    app.post('/api/author/new', productController.create);
    app.get('/api/author', productController.getAll);
    app.get('/api/author/:id', productController.getOne);
    app.put('/api/author/:id', productController.update);
    app.delete('/api/author/:id', productController.delete);



}