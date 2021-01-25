// HTML ROUTES
const router = require("express").Router();
const path = require("path");

//EXPORTING MODULE
module.exports = function(app) {
    //HTML ROUTE FOR "/" TO GET
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    //HTML ROUTE FOR "/EXERCISE" TO GET
    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
    //HTML ROUTE FOR "/STATS" TO GET
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}