const Papa = require('papaparse')
const fs = require('fs')

const incidentsFilePath = './csv/gunViolence.csv'
const incidentsFile = fs.readFileSync(incidentsFilePath, 'utf8')

const incidentsRows = {}
Papa.parse(incidentsFile, {
  header: true,
  skipEmptyLines: true,
  complete: function(results) {
    incidentsRows.data = results.data
    incidentsRows.errors = results.errors
    incidentsRows.meta = results.meta
  }
})

const incidentsArray = incidentsRows.data.map(row => {
  const {
    state,
    incident_id,
    city_or_county,
    n_killed,
    n_injured,
    incident_url,
    longitude,
    latitude
  } = row
  return {
    state,
    incident_id,
    city_or_county,
    n_killed,
    n_injured,
    incident_url,
    longitude,
    latitude
  }
})

const incidentsData = Papa.unparse(incidentsArray)
createFile(
  './csv/incidentsTable.csv',
  incidentsData,
  'Incidents table successfully saved!'
)

function createFile(filePath, data, msg) {
  fs.writeFile(filePath, data, err => {
    if (err) throw err
    console.log(msg)
  })
}
