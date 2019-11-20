const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

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
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log(`DB Connected`));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

// routes middleware
app.use("/api", incidentRoutes);

const port = process.env.PORT || 5000;

// run it
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', error => console.error(error));
// db.once('open', () => console.log('connected to db'));
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());