const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const incidentSchema = new mongoose.Schema({
  incident_id: {
    type: Number,
    unique: true,
    default: 0
  },

  state: {
    type: String,
    ref: "State",
    required: true
  },

  city_or_county: {
    type: String,
    required: false
  },

  n_killed: {
    type: Number,
    required: false,
    default: 0
  },

  n_injured: {
    type: Number,
    required: false,
    default: 0
  },

  incident_url: {
    type: String,
    required: false,
    default: null
  },

  longitude: {
    type: Number,
    required: false,
    default: 0
  },

  latitude: {
    type: Number,
    required: false,
    default: 0
  }
});

module.exports = mongoose.model("Incident", incidentSchema);
