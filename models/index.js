"use strict";
const mongoDB = require('../config/keys').mongoURI;

module.exports = {
    MONGODB_URI: mongoDB || 'gunDam',
    Incident: require("./Incident")
};