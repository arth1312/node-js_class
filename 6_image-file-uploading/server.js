const express = require('express');
const port = 8004;

const server = express();
const dbConnnection = require("./config/dbConnection");
const UserModel = require('./model/user.model');
const uploads = require('./middleware/uploadImage');

server.set("view engine", "ejs");
server.use(express.urlencoded());
server.use("/uploads", express.static('uploads'));

server.get("/", async (req, res) => {
    let users = await UserModel.find();
    return res.render("index", { users });
});

server.post("/add-user", uploads.single('profile'), async (req, res) => {
    let imagePath = "";
    if (req.file) {
        imagePath = `/uploads/${req.file.filename}`
    }
    let user = await UserModel.create({...req.body, profile: imagePath});
    return res.redirect("/");
});

server.get("/delete-user/:id", async (req, res) => {
    let id = req.params.id;
    let user = await UserModel.findById(id);
    if (!user) {
        console.log("User not found");
        return res.redirect("/");
    }
    await UserModel.findByIdAndDelete(id);
    console.log("Delete Success");
    return res.redirect("/");
})

server.get("/edit-user/:id", async (req, res) => {
    let id = req.params.id;
    let user = await UserModel.findById(id);
    if (!user) {
        console.log("User not found");
        return res.redirect("/");
    }
    return res.render("editUser", { user })
})

server.get("/update-user/:id", async (req, res) => {
    let id = req.params.id;
    let user = await UserModel.findById(id);
    if (!user) {
        console.log("User not found");
        return res.redirect("/");
    }
    user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    console.log("Update Success");
    return res.redirect("/");
})

server.listen(port, () => {
    dbConnnection();    // connect to DB
    console.log(`Server started at http://localhost:${port}`);
});

// MVC => M - Model, V - View, C - Controller