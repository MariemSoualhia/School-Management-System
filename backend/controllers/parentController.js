const User = require('../models/User');

// Get courses and grades of a child
exports.getChildCoursesAndGrades = async (req, res) => {
  const { childPhoneNumber } = req.body;

  try {
    // Find child by phone number
    const child = await User.findOne({ phoneNumber: childPhoneNumber });
    if (!child || child.role !== 'student') {
      return res.status(400).json({ msg: 'Child not found' });
    }

    // Send back the child's courses and grades
    res.json({
      courses: child.courses,
      grades: child.grades,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
