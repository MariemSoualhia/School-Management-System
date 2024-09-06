// models/Admin.js
const mongoose = require("mongoose");
const User = require("./User");

const adminSchema = new mongoose.Schema({
  // Add any admin-specific fields if needed
});

module.exports = User.discriminator("Admin", adminSchema);
