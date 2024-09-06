// models/Course.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  duration: {
    type: Number, // Duration in hours
  },
});

module.exports = mongoose.model("Course", courseSchema);
