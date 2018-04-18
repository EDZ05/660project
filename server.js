'use strict';

var express = require('express');
var bodyParser = require('body-parser');
//var pg = require('pg');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
var path = require('path');


var db = require('./models/db')

db.client.connect();

// Import our controllers from their files. Notice how we're
// giving the `require` built-in function the path a file
// locally instead of a dependency that was installed as
// specified in our `package.json` file, like "express".
const indexControllers = require('./controllers/index.js');
const aboutControllers = require('./controllers/about.js');
const eventpageControllers = require('./controllers/eventpage.js');
const neweventControllers = require('./controllers/newevent.js');
const eventControllers = require('./controllers/events.js');
const rsvpControllers = require('./controllers/rsvp.js');
const apiControllers = require('./controllers/api.js');

// Configure our "templating engine", which is
// Mozilla's "Nunjucks" in this case.
const nunjucks = require('nunjucks');

// Through this configuration, Nunjucks will "tell"
// our Express app that it is handling the templates,
// so that when we call the `render` function on a
// response object, it will rely on Nunjucks.
nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

// Now, attach our "controllers" to our "routes".
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/events', eventpageControllers.eventpage);
app.get('/events/new', neweventControllers.newevent);
app.post('/events/new', neweventControllers.newevent);
app.post('/events/:eventID', rsvpControllers.rsvp);
app.get('/events/:eventID', eventControllers.eventDetail);
app.get('/api/events', apiControllers.api);

// Start up the application and listen on the specified
// port, or default to port 4000.
app.listen(process.env.PORT || 4000);





