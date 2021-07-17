const express = require('express');
const notesDB = require('./db/db.json')
var compression = require("compression");

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


app.use(compression({ filter: shouldCompress }));

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}