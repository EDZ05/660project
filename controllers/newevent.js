
// Create a function which is a "controller", it
// handles a request, writing the response.
function newevent(request, response) {
    let validation = {
        hasTitle: true,
        hasImage: true,
        imageFormat: true,
        imageURL: true,
        hasLocation: true,
        titlel50: true,
        locationl50: true
    };
    
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
        
        if(title == ""){
            validation.hasTitle = false;
        }else if(title.length > 50){
            validation.titlel50 = false;
        }else if(image == ""){
            validation.hasImage = false;
        }else if(image.length < 4){
            validation.imageFormat = false;
        }else if(image.substring(image.length - 4).toLowerCase() != ".png" && image.substring(image.length - 4).toLowerCase() != ".jpg" && image.substring(image.length - 4).toLowerCase() != ".gif"){
            validation.imageFormat = false;
        /*}else if(!validURL(image)){
            validation.imageURL = false;*/
        }else if(location == ""){
            validation.hasLocation = false;
        }else if(location.length > 50){
            validation.locationl50 = false;
        }else{
        
        
            const pg = require('pg');
            //const connectionString = process.env.DATABASE_URL || 'postgres://ijjrnrzlkmyomo:8ccf3b5145370c92b5b75f51e1ba82435c559bb37e0a9ff480e4e4fa5f02ce25@ec2-54-235-254-251.compute-1.amazonaws.com:5432/da9ulmsf0vkaes';
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
            //console.log(title);
            client.query(query, (err, res) => {
                if (err) {
                    console.log(err.stack)
                } else {
                    //console.log("success");
                    //console.log(res.rows[0])
                }
            })
        }
    }
    
    response.render('new', validation);
}

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

function validURL(str) {
  var pattern = new RegExp('^(https?:\/\/)?'+ 
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ 
    '((\d{1,3}\.){3}\d{1,3}))'+ 
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ 
    '(\?[;&a-z\d%_.~+=-]*)?'+ 
    '(\#[-a-z\d_]*)?$','i'); 
  if(!pattern.test(str)) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
    newevent,
};
