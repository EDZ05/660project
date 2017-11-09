
// Create a function which is a "controller", it
// handles a request, writing the response.
function eventpage(request, response) {
    response.render('events', { title: 'Hello Yale SOM hackers' });
}

module.exports = {
    eventpage,
};
