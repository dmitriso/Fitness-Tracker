//API ROUTES
//REQUIRING DEPENDENCIES
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
    // app.get("/api/workouts/range", (req, res) => {
    //     Workout.find({}, (err, data) => {
    //         if (err) throw err;
    //         res.json(data);
    //     });
    // });

    //API ROUTE TO POST/CREATE A NEW WORKOUT


    //API ROUTE TO PUT/UPDATE A WORKOUT
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(params.id, { $set: { exercise : body } }, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    })
}
