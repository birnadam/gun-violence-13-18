"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncidentSchema = new Schema({
    incident_id: {
        type: Number,
        unique: true,
        default: 0
    },

    state: {
        type: String,
        required: true,
        ref: "State"
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

const Incident = mongoose.model("Incident", IncidentSchema);
module.exports = Incident; 