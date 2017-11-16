const listofEvents = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = { 
        title: 'Hello Yale SOM hackers',
        events: listofEvents.all
    response.render('index', contextData);
}

module.exports = {
    index,
};