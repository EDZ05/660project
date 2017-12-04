const eventModels = require('../models/events.js');

// Create a function which is a "controller", it
// handles a request, writing the response.
function eventDetail(request, response) {
    const eventID = parseInt(request.params.eventID, 10);
    const event = eventModels.getById(eventID);
    if(event == null) {
        response.status(404).send('Cannot find event');
    } else{
        const contextData = {
            title: "Event detail page",
            event: eventModels.getById(eventID),
        };
        response.render('event-detail', contextData);
    }    
}

module.exports = {
    eventDetail,
};