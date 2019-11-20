const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const incidentRoutes = express.Router();
const Incident = require("./models/incident");

// allows us to use .env
require("dotenv").config();
// import route(s)
const incRoutes = require("./routes/incidentRoutes");
// const apiRoutes = require("./routes/routes");

// db
mongoose
  .connect(process.env.DATABASE || "mongodb://127.0.0.1:27017/gunDam", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  // .then(() => console.log(`DB Connected`));

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
  })
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// routes middleware
app.use("/api", incidentRoutes);
app.use("/inc", incRoutes);

incidentRoutes.route("/").get(function(req, res) {
  Incident.findOne(function(err, incidents) {
    if (err) {
      console.log(err);
    } else {
      res.json(incidents);
    }
  });
});

incidentRoutes.route("/:state").get(function(req, res) {
  let state = req.params.state;
  Incident.findById(state, function(err, incident) {
    res.json(incident);
  });
});


// run it
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('connected to db'));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
