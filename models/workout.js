const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//MODEL SCHEMA FOR WORKOUT COLLECTION AND EXERCISE OBJECTS
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [{
        type: {
            type: String,
            required: "Type of workout is required!"
        },
        name: {
            type: String,
            trim: true,
            required: "The name is required!"
        },
        distance: {
            type: Number,
            required: "Distance is required!"
        },
        duration: {
            type: Number,
            required: "The duration is required!"
        },
        weight: {
            type: Number,
            required: "The weight is required!"
        },
        sets: {
            type: Number,
            required: "The number sets is required!"
        },
        reps: {
            type: Number,
            required: "The number of reps is required!"
        },
    }]
},{toJSON: { virtuals: true }}
);


//METHOD FOR COMPUTING THE TOTAL DURATION
WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total,exercise) => {
        return total + exercise.duration
    }, 0);
});


const Workout = mongoose.model("Workout", WorkoutSchema);
//EXPORTING MODULE
module.exports = Workout;

