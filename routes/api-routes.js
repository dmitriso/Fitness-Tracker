// API ROUTES
const router = require("express").Router();
const { Router } = require("express");
const Workout = require("../models/workout.js");


//EXPORTING MODULE
module.exports = function(app) {
//API ROUTE TO GET/FIND ALL WORKOUTS("/api/workouts")
app.get("/api/workouts", (req,res) => {
    Workout.find({}, (err,data) => {
        if(err) throw err;
        res.json(data);
    });
});
//API ROUTE TO GET/FIND 

//API ROUTE TO POST/CREATE A NEW WORKOUT
app.post("/api/workouts", ({ body },res) => {
    Workout.insert(body, (err,data) => {
        if(err) throw err;
        res.json(data);
    });
});
//API ROUTE TO PUT/UPDATE A WORKOUT
app.put("/api/workouts/:id", ({ body },res) => {
    Workout.update({"_id": mongojs.ObjectId(id)},{$set: { body }}, (err,data) => {
        if(err) throw err;
        res.json(data);
    })
})
}
