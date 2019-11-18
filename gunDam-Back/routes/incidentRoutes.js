const express = require("express");
const router = express.Router();

const { pullIncident, pullIncidentByState, } = require("../controllers/incident");

// // get incidents using controller
// router.get("/", (req, res) => {
//     res.json({
//         incident: req.incident
//     })
// })
// get incidents using controller
// router.get("/", (req, res) => {
//     // res.send(pullIncidents)
//     console.log(res);
//     console.log(pullIncidents);
// })

// pullIncident();
pullIncidentByState("California");
module.exports = router;