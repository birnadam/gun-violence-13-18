const express = require("express");
const router = express.Router();
const { states } = require("../states");
const Incident = require("../models/incident");

const {
  pullIncident,
  pullIncidentByState,
  pullAllIncidentsByState,
  pullTenIncidentsByState,
  pullAllIncidentsByStateNumKilled,
  countIncidentsPerState
} = require("../controllers/incident");

router.get("/", async (req, res) => {

  try {
    pullTenIncidentsByState("California");
    // pullAllIncidentsByStateNumKilled("Texas");
  } catch (error) {
    res.status(500).json({ message: error.message });
    res.send("get request");
  }
});

router.get("/incidents", (req, res) => {
    try {
      pullTenIncidentsByState("California");
      // pullAllIncidentsByStateNumKilled("Texas");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  // res.send("get request to incidents");
});
// pull 10 incidents route
// router.get("/incidentsByState/:stateName", pullTenIncidentsByState);

// router.get("/", (state, req, res) => {
//   Incident.find({ state })
//     .populate()
//     .sort({ date: -1 })
//     .limit(10)
//     .exec((err, incidents) => {
//       if (err) {
//         throw err;
//       }
//       console.log(incidents);
//     });

// ****testing controller methods****
// get ten incidents per state
// pullTenIncidentsByState("California");
// // pulls one incident
// pullIncident();
// // pull incident by state
// pullIncidentByState("California");
// // pulls all incidents per state sorted by date
// can combine this with state collected later
// pullAllIncidentsByState("Arizona");
// // pulls all incidents per state by sorted by number killed
// pullAllIncidentsByStateNumKilled("Texas");
// counts number of incidents per state passthrough
// lists each state with number of incidents, can use this to populate data later for conversion
// states.forEach(state => {
//   return [state, countIncidentsPerState(state)];
// });

module.exports = router;
