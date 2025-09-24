const express = require('express');
const port = 8004;

const server = express();
const dbConnnection = require("./config/dbConnection");

server.set("view engine", "ejs");
server.use(express.urlencoded());
server.use("/uploads", express.static('uploads'));

const routes = require("./routes/index.routes")
server.use("/", routes)

server.listen(port, () => {
    dbConnnection();    // connect to DB
    console.log(`Server started at http://localhost:${port}`);
});

// MVC => M - Model, V - View, C - Controller, R - Routes