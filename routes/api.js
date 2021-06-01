const fs = require("fs");
const path = require("path");


//creates a random id
const { v4: uuidv4 } = require('uuid')



module.exports =  (app) => {
    app.get('/api/notes', (req, res) => res.sendFile(path.join(_dirname, "../db/db.json")));

    //api for storing user added note and renderning updated notes stored on db.json
    app.post("/api/notes", (req, res) => {
        let newNote = {
            //generate unique id
            id: uuid(),
            title: req.body.title,
            text: req.body.text
        };
        let oldNote = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))
        oldNote.push(newNote)
        fs.writeFileSync("./db/db.json", JSON.stringify(oldNote))
        res.json(oldNote)
    })

    //query parameter containing the id of a note to delete
    app.delete("/api/notes/:id", (req, res) => {
        let choose = req.param.id
        let oldNote = JSON.parse(fs.readFileSync(path.join(_dirname, "../db/db.json"), "utf-8"))
        const newNote = oldNote.filter(oldNote.id != choose)
        fs.writeFileSync("./db/db.json", JSON.stringify(newNote))
        res.send(newNote)
    })
}
