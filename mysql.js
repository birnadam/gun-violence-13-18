const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'incidents'
})

let query = ''

db.connect(err => {
  if (err) throw err
  console.log('Connection successful!')

  query = 'DROP TABLE IF EXISTS INCIDENTS'
  executeQuery(query, 'Incidents table dropped!')

  query =
    'CREATE TABLE INCIDENTS (row_id INT AUTO_INCREMENT PRIMARY KEY, state VARCHAR(255), ' +
    'incident_id INT, city_or_county VARCHAR(255), n_killed INT, n_injured INT, incident_url VARCHAR(255), longitude DECIMAL, latitude DECIMAL)'
  executeQuery(query, 'Incidents table created!')

  query = 'SET GLOBAL LOCAL_INFILE=TRUE'
  executeQuery(query, 'Local infile set 2 true!')

  query =
    "LOAD DATA LOCAL INFILE 'csv/incidentsTable.csv' INTO TABLE INCIDENTS FIELDS TERMINATED BY ',' IGNORE 1 LINES " +
    '(state, incident_id, city_or_county, n_killed, n_injured, incident_url, longitude, latitude)'
  executeQuery(query, 'Incidents table loaded!')

  db.end(err => {
    if (err) throw err
    console.log('All done! Closing the database connection')
  })
})

function executeQuery(query, msg) {
  db.query(query, err => {
    if (err) throw err
    console.log(msg)
  })
}
