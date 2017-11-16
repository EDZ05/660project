const listofEvents = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    response.render('index', { title: 'Hello Yale SOM hackers' });
}

function listEvents(request, response) {
    const query = request.query.q;
    const contextData = {
        title: 'List of events',
        eventMatchingQuery: listofEvents,
    };
    if(query){
      contextData.peopleMatchignQuery = allPeople.filter(person => person.toLowerCase().includes(query.toLowerCase()))
    }
    response.render('events', contextData);
}

module.exports = {
    index,
    listEvents,
};