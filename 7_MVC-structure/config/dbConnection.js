const mongoose = require('mongoose');

const dbConnnection = () => {
    mongoose.connect("mongodb://localhost:27017/node-4PM")
    .then(()=> console.log("DB is Connected"))
    .catch(err => console.log(err));
}

module.exports = dbConnnection;