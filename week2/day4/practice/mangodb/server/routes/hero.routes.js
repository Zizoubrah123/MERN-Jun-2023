const JokeController = require('../controllers/hero.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);
    app.put('/api/jokes/:id', JokeController.updateExistingJoke);
    app.post('/api/new/jokes', JokeController.createNewJoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
    app.get('/api/jokes/allusers', JokeController.findAllJokes);
}