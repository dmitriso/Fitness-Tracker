// API ROUTES
const router = require("express").Router();
const Workout = require("../models/workout.js");


//EXPORTING MODULE
module.exports = function(app) {
//API ROUTE TO GET/FIND ALL WORKOUTS("/api/workouts")
router.get("/api/workouts", (req,res) => {
    db.Workout.find({}, (err,data) => {
        if(err) throw err;
        res.json(data);
    });
});
//API ROUTE TO GET/FIND 

//API ROUTE TO POST/CREATE A NEW WORKOUT
router.post("/api/workouts", ({ body },res) => {
    db.Workout.insert(body, (err,data) => {
        if(err) throw err;
        res.json(data);
    })
})
//API ROUTE TO PUT/UPDATE A WORKOUT
}
