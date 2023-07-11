const { Author } = require('../models/author.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.create = (request, response) => {
    const { name } = request.body;
    Author.create({
        name
    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err))
}

module.exports.getAll = (request, response) => {
    Author.find()
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body,{new:true, runValidators: true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.status(400).json(err))
}

module.exports.delete = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}