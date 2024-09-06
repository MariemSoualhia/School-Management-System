// models/Teacher.js
const mongoose = require("mongoose");
const User = require("./User");

const teacherSchema = new mongoose.Schema({
  specialty: {
    type: String,
    enum: ["networking", "development", "project management"],
    required: true,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

module.exports = User.discriminator("Teacher", teacherSchema);
