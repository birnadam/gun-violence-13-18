const express = require("express");
const router = express.Router();
const { states } = require("../states");
const Incident = require("../models/incident");

// module.exports = function(app) {
  // api route
  router.get("/incidents", function(req, res) {
    Incident.find(function(err, incidents) {
      if (err) res.send(err);

      res.json(incidents);
    });
  });
  router.get("/", function(req, res) {
    Incident.find(function(err, incidents) {
      if (err) res.send(err);

      res.json(incidents);
    });
  });
// };

module.exports = router;
