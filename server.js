const express = require('express');
const fs = require("fs");
const path = require("path");
const static = require("express-static");
//tells node that we are creating an "express" server
const app = express();

const PORT = process.env.PORT || 8080;


//express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

//Routes
require('./routes/api')(app);
require('./routes/view')(app);



//listener: "starts" our server

app.listen(PORT, () => {
    console.log(`App listening on PORT: http://localhost:${PORT}`);
})