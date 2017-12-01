
// Create a function which is a "controller", it
// handles a request, writing the response.
function newevent(request, response) {
    if (request.method==='POST'){
        var title = request.body.title;
        var image = request.body.image;
        var location = request.body.location;
        var year = request.body.year;
        var month = request.body.month;
        var day = request.body.day;
        var hour = request.body.hour;
        var minute = request.body.minute;
        var date = year.toString() + '-' + twoDigits(month.toString()) + '-' + twoDigits(day.toString()) + ' ' + twoDigits(hour.toString()) + ":" + twoDigits(minute.toString()) + ":00" 
        
        const pg = require('pg');
        const connectionString = process.env.DATABASE_URL || 'postgres://ijjrnrzlkmyomo:8ccf3b5145370c92b5b75f51e1ba82435c559bb37e0a9ff480e4e4fa5f02ce25@ec2-54-235-254-251.compute-1.amazonaws.com:5432/da9ulmsf0vkaes';
        //const client = new pg.Client(connectionString);
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
        text: 'INSERT INTO events(title, date, image, location) VALUES($1, $2, $3, $4)',
        values: [title, date, image, location],
        }
        
        client.query(query, (err, res) => {
            if (err) {
                console.log(err.stack)
            } else {
                console.log(res.rows[0])
            }
        })
        /*client.query('SELECT * from events;')
        .then(res => console.log(res.rows[0]))
        .catch(e => console.error(e.stack))*/
    }
    
    response.render('new', { title: 'Hello Yale SOM hackers' });
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

module.exports = {
    newevent,
};
