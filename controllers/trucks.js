const express = require("express");
const truckRouter = express.Router();
const truckData = require("../models/seed");
const Truck = require("../models/truck.js");
require("dotenv").config();
// const api = process.env.API;

// INDUCES
// SEED
truckRouter.get("/seed", (req, res) => {
  Truck.deleteMany({}, (error, allTruck) => {});
  Truck.create(truckData, (error, data) => {
    res.redirect("/truck");
  });
});

// INDEX
truckRouter.get("/", (req, res) => {
  Truck.find({}, (error, allTruck) => {
    res.render("index.ejs", {
      Truck: allTruck,
    });
  });
});

// NEW
truckRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});

// DELETE
truckRouter.delete("/:id", (req, res) => {
  Truck.findByIdAndRemove(req.params.id, (err, deletedTruck) => {
    res.redirect("/truck");
  });
});
// UPDATE
truckRouter.put("/:id", (req, res) => {
  console.log("put");
  req.body.completed = req.body.completed === "on" ? true : false;
  Truck.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedTruck) => {
      console.log(err);
      res.redirect(`/bed/${req.params.id}`);
    }
  );
});

// CREATE
truckRouter.post("/", (req, res) => {
  req.body.completed = req.body.completed === "on" ? true : false;
  Truck.create(req.body, (error, createdTruck) => {
    res.redirect("/truck");
  });
});

// EDIT
truckRouter.get("/:id/edit", (req, res) => {
  Truck.findById(req.params.id, (err, foundTruck) => {
    res.render("edit.ejs", { Truck: foundTruck });
  });
});

// SHOW
truckRouter.get("/:id", (req, res) => {
  Truck.findById(req.params.id, (err, allTruck) => {
    res.render("show.ejs", {
      Truck: allTruck
    });
  });
});

module.exports = truckRouter;