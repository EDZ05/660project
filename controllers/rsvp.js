const eventModels = require('../models/events.js');
const db = require('../models/db');
// Create a function which is a "controller", it
// handles a request, writing the response.
function rsvp(request, response) {
    const eventID = parseInt(request.params.eventID, 10);
    if (request.method==='POST'){
        var email = request.body.email;

        console.log(email, eventID);
        
        const query = {
            text: 'UPDATE events SET attending = array_append(attending, $1) WHERE id = $2',
            values: [email, eventID],
        };
        
        db.client.query(query, (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log(res.rows[0]);
            }
        });
    }
    
    response.redirect('/events/'+eventID);
}

module.exports = {
    rsvp,
};
