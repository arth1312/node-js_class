const express = require('express');
const routes = express.Router();

const uploads = require('../middleware/uploadImage');
const { homePage, addUser, deleteUser, editUser, updateUser } = require('../controller/user.controller');

routes.get("/", homePage);

routes.post("/add-user", uploads.single('profile'), addUser);

routes.get("/delete-user/:id", deleteUser);

routes.get("/edit-user/:id", editUser);

routes.post("/update-user/:id", uploads.single('profile'), updateUser);

module.exports = routes;
