const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// allows us to use .env
require("dotenv").config();
// import route(s)
const incidentRoutes = require("./routes/incidentRoutes");


// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE || 'mongodb://localhost/gunDam', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log(`DB Connected`));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());

// routes middleware
app.use("/", incidentRoutes);

const port = process.env.PORT || 5000;

// run it
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

