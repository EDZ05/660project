const pg = require('pg');

const client = new pg.Client({
    user: "ijjrnrzlkmyomo",
    password: "8ccf3b5145370c92b5b75f51e1ba82435c559bb37e0a9ff480e4e4fa5f02ce25",        
    database: "da9ulmsf0vkaes",
    port: 5432,
    host: "ec2-54-235-254-251.compute-1.amazonaws.com",
    ssl: true
}); 

module.exports = {
    client,
};