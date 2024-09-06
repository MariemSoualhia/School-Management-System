const Course = require('../models/Course');
const User = require('../models/User');

// Get courses assigned to a teacher
exports.getTeacherCourses = async (req, res) => {
  try {
    const teacher = await User.findById(req.user.id);
    if (!teacher || teacher.role !== 'teacher') {
      return res.status(400).json({ msg: 'Invalid teacher ID' });
    }

    const courses = await Course.find({ teacher: req.user.id });
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Assign grades to students
exports.assignGrades = async (req, res) => {
  const { courseId, studentId, grade } = req.body;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({ msg: 'Course not found' });
    }

    const student = await User.findById(studentId);
    if (!student || student.role !== 'student') {
      return res.status(400).json({ msg: 'Invalid student ID' });
    }

    // Add grade to the student's grades
    student.grades.push({ course: courseId, grade });
    await student.save();

    res.json({ msg: 'Grade assigned successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
