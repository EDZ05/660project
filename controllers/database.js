const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'ec2-54-235-254-251.compute-1.amazonaws.com';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'SELECT * events;
query.on('end', () => { client.end(); });
