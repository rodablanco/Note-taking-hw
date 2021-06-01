const path = require("path");


//return the index.html file
module.exports = function (app) {
    app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "../Develop/public/notes.html")))
    app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../Develop/public/index.html")))
}