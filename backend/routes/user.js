const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");
const { isAdmin } = require("../middleware/roles");

// Register a new user
router.post("/register", userController.register);

// Login a user
router.post("/login", userController.login);

// Get profile of logged-in user
router.get("/profile", auth, userController.getProfile);

// Update profile of logged-in user
router.put("/profile", auth, userController.updateProfile);

// Delete a user (admin only)
router.delete("/:id", [auth, isAdmin], userController.deleteUser);

module.exports = router;
