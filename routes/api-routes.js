// API ROUTES
const mongoose = require("mongoose");
const Workout = require("../models/workout.js");


//EXPORTING MODULE
module.exports = function (app) {
    //API ROUTE TO GET/FIND ALL WORKOUTS("/api/workouts")
    app.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    //API ROUTE TO GET/FIND 


    //API ROUTE TO POST/CREATE A NEW WORKOUT
    app.post("/api/workouts", ({ body }, res) => {
        Workout.create({ body }, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    //API ROUTE TO PUT/UPDATE A WORKOUT
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        console.log(req.params);
        Workout.update({ id: req.params.id }, { $set: { "type": req.body.type, "name": req.body.name, "distance": req.body.distance, "duration": req.body.duration } }, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });

    //API ROUTE TO PUT/UPDATE A WORKOUT
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(params.id, { $push: { exercise: body } }, (err, data) => {
            if (err) throw err;
        })
    })
}
