const express = require("express");
const connection = require('./app/data/connection');
// const fs = require('fs');	
const path = require('path');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to db'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require('./routes/index');
app.user('/', router)

// // Serving static files on Express
app.use('/css',express.static(__dirname + '/app/public/css'));
app.use('/js',express.static(__dirname + '/app/public/js'));
app.use('/images',express.static(__dirname + '/app/public/images'));
app.use('/data',express.static(__dirname + '/app/data'));

// // API and HTML routes

require("./app/routing/htmlRoutes.js")(app);
// app.use(express.static(__dirname, "/app/public"))
app.use('/api/data', require('./app/routing/apiRoutes'));


// Checking if server is live
app.listen(PORT, function () {
	console.log("Server started on PORT: " + PORT);
});