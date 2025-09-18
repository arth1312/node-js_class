const express = require('express');
const port = 8004;

const server = express();
const dbConnnection = require("./config/dbConnection");
const UserModel = require('./model/user.model');

server.use(express.urlencoded());

server.set("view engine", "ejs");

server.get("/", async (req, res) => {
    let users = await UserModel.find();
    return res.render("index", { users });
});

server.post("/add-user", async (req, res) => {
    let user = await UserModel.create(req.body);
    return res.redirect("/");
});

server.listen(port, () => {
    dbConnnection();    // connect to DB
    console.log(`Server started at http://localhost:${port}`);
});
