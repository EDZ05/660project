const eventModels = require('../models/events.js');
const client = require('../models/db.js').client;

// Create a function which is a "controller", it
// handles a request, writing the response.
function eventDetail(request, response) {
    const eventID = parseInt(request.params.eventID, 10);
    console.log(eventID)
    //client.connect();
    client.query('SELECT * FROM events WHERE id = $1', [eventID], (err, res) => {
        if(err){
            response.status(500).send('error!');
            return;
        }
        //client.end();
        var eventVar = res.rows[0];
        console.log(res.rows[0]);
        //const event = eventModels.getById(eventID);
        if(res.rows == null) {
            response.status(404).send('Cannot find event');
        } else{
        const contextData = {
            title: "Event detail page",
            event: eventVar,
            //event: eventModels.getById(eventID),
        };
        response.render('event-detail', contextData);
        }
    });    
}

module.exports = {
    eventDetail,
};