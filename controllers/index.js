const eventModels = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
<<<<<<< HEAD
    const contextData = {
        title: 'Hello Yale SOM hackers',
        events: eventModels.all,
    }
=======
    const contextData = { 
        title: 'Hello Yale SOM hackers',
        events: listofEvents.all
>>>>>>> d3ce845b8c2f30fcd26e20c975ccc80764782d6e
    response.render('index', contextData);
}

module.exports = {
    index,
};