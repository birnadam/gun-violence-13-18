var path = require("path");
var express = require("express");

var app = express();

module.exports = function(app) {
	// Displays incidents page when user clicks on an incident
	app.get("/incident", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/incident.html"));
	});

	// Displays home page by default
	app.get('/',(req,res) =>{
		res.sendFile(path.join(__dirname, "/../public/home.html"))
	});
};