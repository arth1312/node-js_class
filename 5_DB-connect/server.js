const express = require('express');
const port = 8004;

const server = express();
const dbConnnection = require("./config/dbConnection");
const UserModel = require('./model/user.model');

server.use(express.urlencoded());

server.set("view engine", "ejs");

server.get("/", (req, res) => {
    return res.render("index");
});

server.post("/add-user", async (req, res) => {
    try {
        let user = await UserModel.create(req.body);
        return res.redirect("/");
    } catch (err) {
        console.error("Error adding user:", err);
        return res.status(500).send("Internal Server Error");
    }
});

server.listen(port, () => {
    dbConnnection();    // connect to DB
    console.log(`Server started at http://localhost:${port}`);
});
