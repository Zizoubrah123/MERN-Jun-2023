const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.create = (request, response) => {
    const { title, price, description } = request.body;
    Person.create({
        title,
        price,
        description
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getAllproducts = (request, response) => {
    Person.find()
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}