"use strict";

const express = require('express');
const path = require("path");
const router = express.Router();
const db = require("../models");
const incidents = require("./api/incidents")
const Incident = require("../models/incident");

router.get('/test', async (req,res) => {
	try {
		// const allIncidents = await Incident.find();
		res.send('testing');
	} catch (error){
		console.log(error)
	}
})

router.get('/', async (req,res) => {
	try {
		// const allIncidents = await Incident.find();
		res.send('testing');
	} catch (error){
		console.log(error)
	}
})
// Displays incidents page when user clicks on an incident
// app.get("/incident", function (req, res) {
// 	res.sendFile(path.join(__dirname, "/../public/incident.html"));
// });

// Displays home page by default

// router.use("/api", incidents)
// router.use(function (req, res) {
// 	res.sendFile(path.join(__dirname, "../public/home.html"))
// });

// // GET /test - go here to test if we get a response
// router.get("/test", (req, res) => {
// 	res.json({ test: "/test" });
// });

// // GET route for all incidents
// router.get("/", (req, res) => {
// 	db.Incident.find({})
// 		.then(result => {
// 			console.log(`Incident count: ${result.length}`);
// 			res.render("index", { incident: result });
// 		})
// 		.catch(err => {
// 			res.render("index", { incident: "failed to get incidents" });
// 		});
// });

module.exports = router;