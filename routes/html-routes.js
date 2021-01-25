// HTML ROUTES
const path = require("path");

//EXPORTING MODULE
module.exports = function(app) {
    //HTML ROUTE FOR "/"
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })
    //HTML ROUTE FOR "/EXERCISE"
    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"))
    })
    //HTML ROUTE FOR "/STATS"
    app.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}