const Course = require("../models/Course");
const User = require("../models/User");

// Add a new course
exports.addCourse = async (req, res) => {
  const { name, description, duration, teacherId } = req.body;

  try {
    // Check if teacher exists
    const teacher = await User.findById(teacherId);
    if (!teacher || teacher.role !== "teacher") {
      return res.status(400).json({ msg: "Invalid teacher ID" });
    }

    // Create new course
    const course = new Course({
      name,
      description,
      duration,
      teacher: teacherId,
    });

    // Save course to DB
    await course.save();

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get courses for a student
exports.getStudentCourses = async (req, res) => {
  try {
    const student = await User.findById(req.user.id);
    if (!student || student.role !== "student") {
      return res.status(400).json({ msg: "Invalid student ID" });
    }

    const courses = await Course.find({ students: req.user.id }).populate(
      "teacher",
      "name"
    );
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Assign students to a course (Admin only)
exports.assignStudents = async (req, res) => {
  const { courseId, studentIds } = req.body;

  try {
    // Find course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(400).json({ msg: "Course not found" });
    }

    // Add students to the course
    course.students.push(...studentIds);
    await course.save();

    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
