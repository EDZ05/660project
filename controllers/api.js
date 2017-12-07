
// Create a function which is a "controller", it
// handles a request, writing the response.
function api(request, response) {
    
    var requestURL = request.url;
    if (requestURL.includes("?search=")){
        search(request, response)
    }else{
        
    
        
    const pg = require('pg');
    const client = new pg.Client({
        user: "ijjrnrzlkmyomo",
        password: "8ccf3b5145370c92b5b75f51e1ba82435c559bb37e0a9ff480e4e4fa5f02ce25",
        database: "da9ulmsf0vkaes",
        port: 5432,
        host: "ec2-54-235-254-251.compute-1.amazonaws.com",
        ssl: true
    }); 
    
    client.connect();
    const query = {
    text: 'SELECT * from events',
    
    }
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        } 
        var eventVar = res.rows;
        response.json({events: eventVar});
        
    })
    }
}

function search(request, response) {
    
    
    var eventTitle = request.url.substr(request.url.indexOf('=')+1,request.url.length);
    //console.log(eventTitle);
    eventTitle = '\'%' + eventTitle + '%\'';
    const pg = require('pg');
    const client = new pg.Client({
        user: "ijjrnrzlkmyomo",
        password: "8ccf3b5145370c92b5b75f51e1ba82435c559bb37e0a9ff480e4e4fa5f02ce25",
        database: "da9ulmsf0vkaes",
        port: 5432,
        host: "ec2-54-235-254-251.compute-1.amazonaws.com",
        ssl: true
    }); 
    
    client.connect();
    const query = {
    text: 'SELECT * from events where title ILIKE ' + eventTitle,
    }
    //console.log(query);
    client.query(query, (err, res) => {
        if (err) {
            console.log(err.stack);
        }
        //console.log(res.rows.length);
        var eventVar = parseJSON(res.rows);
        response.json({events: eventVar});
        
    })
}

function parseJSON(event){
    var sqlEvent = event;
    //console.log(sqlEvent);
    var output = [];
    for (var i = 0;i<sqlEvent.length;i++){
        var attending = sqlEvent[i].attending;
        if (sqlEvent[i].attending == null){
            attending = [];
        }
        
        output[i] = {
            "id": sqlEvent[i].id,
            "title": sqlEvent[i].title,
            "location": sqlEvent[i].location,
            "image": sqlEvent[i].image,
            "time": sqlEvent[i].date,
            "attendees": attending,
            
        }
    }
    return output;
}

module.exports = {
    api,
    search,
};
