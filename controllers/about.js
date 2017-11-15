
// Create a function which is a "controller", it
// handles a request, writing the response.


function about(request, response) {
    var contextData = {};
    response.render('about.html', contextData);
}

module.exports = {
    about: about,
};

