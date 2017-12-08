const eventModels = require('../models/events.js');
const client = require('../models/db.js').client;

// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    
    //client.connect();
    
    
    client.query('SELECT * FROM events', (err, res) => {
        if(err){
            response.status(500).send('error!');
            return;
        }
        //client.end();
        const contextData = {
            title: "Hi there",
            events: res.rows,
        };
        response.render('index', contextData);
    });
}

function forceLower(strInput) 
{
    strInput.value=strInput.value.toLowerCase();
}

module.exports = {
    index,
};