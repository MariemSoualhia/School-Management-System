// models/Parent.js
const mongoose = require("mongoose");
const User = require("./User");

const parentSchema = new mongoose.Schema({
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = User.discriminator("Parent", parentSchema);
