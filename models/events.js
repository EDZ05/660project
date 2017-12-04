'use strict';

//get data from postgres
/*
const allResults = [];
const pg = require('pg');

const client = new pg.Client({
    user: "ijjrnrzlkmyomo",
    password: "8ccf3b5145370c92b5b75f51e1ba82435c559bb37e0a9ff480e4e4fa5f02ce25",        
    database: "da9ulmsf0vkaes",
    port: 5432,
    host: "ec2-54-235-254-251.compute-1.amazonaws.com",
    ssl: true
}); 
const query = client.query('SELECT * FROM events')

query.on('row', (row) => {
    console.log(row);
    allResults.push(row);
})
query.on('end', (res) => {
    client.end();
})
*/
    
 /**
 * An Array of all the events
 */
const allEvents = [
    {
        id: 0,
        title: 'SOM House Party',
        // Note that JavaScript months are zero-indexed,
        // so, month zero is January. This is Jan 17th
        // 2018 at 4:30pm local time.
        date: new Date(2018, 0, 17, 16, 30, 0),
        image: 'http://i.imgur.com/pXjrQ.gif',
        location: 'Kyle \'s house',
        attending: ['kyle.jensen@yale.edu', 'kim.kardashian@yale.edu'],
    },
    {
        id: 1,
        title: 'BBQ party for hackers and nerds',
        date: new Date(2017, 8, 1, 19, 0, 0),
        image: 'http://i.imgur.com/7pe2k.gif',
        location: 'Sharon Oster\'s house',
        attending: ['kyle.jensen@yale.edu', 'kim.kardashian@yale.edu'],
    },
    {
        id: 2,
        title: 'BBQ for managers',
        date: new Date(2017, 12, 20, 18, 0, 0),
        image: 'http://i.imgur.com/CJLrRqh.gif',
        location: 'Barry Nalebuff\'s house',
        attending: ['kim.kardashian@yale.edu'],
    },
    {
        id: 4,
        title: 'Cooking lessons for the busy business student',
        date: new Date(2018, 3, 2, 19, 0, 0),
        image: 'http://i.imgur.com/02KT9.gif',
        location: 'Yale Farm',
        attending: ['homer.simpson@yale.edu'],
    },
];


/**
 * Returns the first event that has a particular id.
 */
function getById(id) {
    for (let i = 0; i < allEvents.length; i += 1) {
        if (id === allEvents[i].id) {
            return allEvents[i];
        }
    }
    return null;
}

module.exports = {
    all: allEvents,
    //results: allResults,
    getById,
};
