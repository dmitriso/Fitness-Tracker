// HTML ROUTES
const path = require("path");

module.exports = function(app) {
    //HTML ROUTE FOR "/"
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "./index.html"))
    })
    //HTML ROUTE FOR "/EXERCISE"
    app.get("/exercise", (req,res) => {
        res.sendFile(path.join(__dirname, "./exercise.html"))
    })
    //HTML ROUTE FOR "/STATS"
}