const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const auth = require("../middleware/auth");
const { isTeacher } = require("../middleware/roles");

// Get courses assigned to a teacher
router.get("/courses", [auth, isTeacher], teacherController.getTeacherCourses);

// Assign grades to students
router.post("/grades", [auth, isTeacher], teacherController.assignGrades);

module.exports = router;
