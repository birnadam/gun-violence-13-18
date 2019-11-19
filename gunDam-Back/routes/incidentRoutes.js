const express = require("express");
const router = express.Router();
const { states } = require("../states");

const {
  pullIncident,
  pullIncidentByState,
  pullAllIncidentsByState,
  pullTenIncidentsByState,
  pullAllIncidentsByStateNumKilled,
  countIncidentsPerState
} = require("../controllers/incident");

// // pulls one incident
// pullIncident();
// // pull incident by state
// pullIncidentByState("California");

pullTenIncidentsByState("California");

// // pulls all incidents per state sorted by date
// can combine this with state collected later
// pullAllIncidentsByState("Arizona");
// // pulls all incidents per state by sorted by number killed
// pullAllIncidentsByStateNumKilled("Texas");

// counts number of incidents per state passthrough
// countIncidentsPerState("California");

// lists each state with number of incidents, can use this to populate data later for conversion
// states.forEach(state => {
//   return [state, countIncidentsPerState(state)];
// });

module.exports = router;
