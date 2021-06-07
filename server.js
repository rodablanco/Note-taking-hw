const express = require('express');
const notesDB = require('./db/db.json')

//tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;


//express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use(express.static("./Develop/public"));

//Routes
require('./routes/api')(app);
require('./routes/view')(app);



//listener: "starts" our server

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost:${PORT}`);
})