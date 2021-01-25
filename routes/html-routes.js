// HTML ROUTES
const path = require("path");

module.exports = function(app) {
    //HTML ROUTE FOR "/"
    app.get("/", (req,res) => {
        res.sendFile(path.join(__dirname, "./index.html"))
    })
    //HTML ROUTE FOR "/EXERCISE"
    

    //HTML ROUTE FOR "/STATS"
}