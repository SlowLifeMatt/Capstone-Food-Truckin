// Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const truckController = require("./controllers/trucks")

require("dotenv").config();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});
// Database Connection Logs
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// MIDDLEWARE

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/truck", truckController)
app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`server is listening to the ocean waves on port: ${PORT}`)
);
