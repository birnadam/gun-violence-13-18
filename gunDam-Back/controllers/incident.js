const Incident = require("../models/incident");

// pulls one incident
exports.pullIncident = (req, res) => {
  Incident.findOne()
    .populate("State")
    .exec((err, incident) => {
      if (err) {
        throw err;
      }
      console.log(incident)
    });
};

// pull by state
exports.pullIncidentByState = (state, req, res) => {
    Incident.findOne({ 'state': state })
    .populate()
    .exec((err, incident) => {
      if (err) {
        throw err;
      }
      console.log(incident)
    });
};
