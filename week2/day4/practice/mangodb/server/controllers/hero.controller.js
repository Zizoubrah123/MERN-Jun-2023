const joke = require('../models/hero.model');
 
module.exports.findAllJokes = (req, res) => {
    joke.find()
        .then((allDajokes) => {
            res.json({ joke: allDajokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    joke.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ joke: oneSingleUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    joke.create(req.body)
        .then(newlyCreatedjoke => {
            res.json({ joke: newlyCreatedjoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingJoke = (req, res) => {
    joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({ joke: updatedUser })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}