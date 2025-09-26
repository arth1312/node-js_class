const mongoose = require('mongoose');

const dbConnnection = () => {
    mongoose.connect("mongodb+srv://arth1312:Arth1312@cluster0.t7hd3z1.mongodb.net/mvc")
    .then(()=> console.log("DB is Connected"))
    .catch(err => console.log(err));
}

module.exports = dbConnnection;