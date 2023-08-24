const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://maniom002:<password>@mern-project.j4somtb.mongodb.net/DOCTOR-APPOINTMENT");
    // console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    // console.log(`Mongodb Server Issue ${error}`.bgRed.white);
    console.log(error);
  }
};

module.exports = connectDB;
