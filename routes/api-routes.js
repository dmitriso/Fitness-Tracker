//API ROUTES
//REQUIRING DEPENDENCIES
const mongoose = require("mongoose");
// const Workout = require("../models/workout.js");
const db = require("../models");


//EXPORTING MODULE
module.exports = function (app) {
    //API ROUTE TO GET/FIND ALL WORKOUTS("/api/workouts")
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    //API ROUTE TO GET/FIND 
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    //API ROUTE TO POST/CREATE A NEW WORKOUT
    app.post("/api/workouts", (req,res) => {
       db.Workout.create({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    //API ROUTE TO PUT/UPDATE A WORKOUT
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate(params.id, { $push: { exercises : body } }, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    })
}
