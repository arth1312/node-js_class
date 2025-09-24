const UserModel = require('../model/user.model');
const path = require('path');
const fs = require('fs');

exports.homePage = async (req, res) => {
    let users = await UserModel.find();
    return res.render("index", { users });
}

exports.addUser = async (req, res) => {
    let imagePath = "";
    if (req.file) {
        imagePath = `/uploads/${req.file.filename}`
    }
    let user = await UserModel.create({ ...req.body, profile: imagePath });
    return res.redirect("/");
}

exports.deleteUser = async (req, res) => {
    let id = req.params.id;
    let user = await UserModel.findById(id);
    if (!user) {
        console.log("User not found");
        return res.redirect("/");
    }
    if (user.profile != "") {
        try {
            let imagePath = path.join(__dirname, user.profile);
            await fs.unlinkSync(imagePath)
        } catch (error) {
            console.log("File Missing");
        }
    }
    await UserModel.findByIdAndDelete(id);
    console.log("Delete Success");
    return res.redirect("/");
}

exports.editUser = async (req, res) => {
    let id = req.params.id;
    let user = await UserModel.findById(id);
    if (!user) {
        console.log("User not found");
        return res.redirect("/");
    }
    return res.render("editUser", { user })
}

exports.updateUser = async (req, res) => {
    let id = req.params.id;
    let user = await UserModel.findById(id);
    if (!user) {
        console.log("User not found");
        return res.redirect("/");
    }
    let imagePath;
    if (req.file) {
        if (user.profile != "") {
            try {
                imagePath = path.join(__dirname, user.profile);
                await fs.unlinkSync(imagePath)
            } catch (error) {
                console.log("File Missing");
            }
        }
        imagePath = `/uploads/${req.file.filename}`;
    } else {
        imagePath = user.profile;
    }
    user = await UserModel.findByIdAndUpdate(id, { ...req.body, profile: imagePath }, { new: true });
    console.log("Update Success");
    return res.redirect("/");
}