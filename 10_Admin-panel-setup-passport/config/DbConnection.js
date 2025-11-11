const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://arth1312:Arth1312@cluster0.t7hd3z1.mongodb.net/admin-panel");
    // await mongoose.connect("");
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error("Database Connection Failed:", err);
  }
};

module.exports = dbConnect;
