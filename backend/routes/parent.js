const express = require("express");
const router = express.Router();
const parentController = require("../controllers/parentController");
const auth = require("../middleware/auth");
const { isParent } = require("../middleware/roles");

// Get child's courses and grades
router.post(
  "/child",
  [auth, isParent],
  parentController.getChildCoursesAndGrades
);

module.exports = router;
