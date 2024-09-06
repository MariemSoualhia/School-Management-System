const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/auth');
const { isAdmin, isTeacher } = require('../middleware/roles');

// Add a new course (admin)
router.post('/', [auth, isAdmin], courseController.addCourse);

// Get courses for a student
router.get('/student', auth, courseController.getStudentCourses);

// Assign students to a course (admin)
router.post('/assign', [auth, isAdmin], courseController.assignStudents);

module.exports = router;
