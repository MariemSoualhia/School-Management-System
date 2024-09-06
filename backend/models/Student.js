// models/Student.js
const mongoose = require("mongoose");
const User = require("./User");

const studentSchema = new mongoose.Schema({
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  grades: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
      grade: Number,
    },
  ],
});

module.exports = User.discriminator("Student", studentSchema);
