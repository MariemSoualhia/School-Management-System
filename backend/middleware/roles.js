// middleware/roles.js

exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied: Admin only" });
  }
  next();
};

exports.isTeacher = (req, res, next) => {
  if (req.user.role !== "teacher") {
    return res.status(403).json({ msg: "Access denied: Teacher only" });
  }
  next();
};

exports.isParent = (req, res, next) => {
  if (req.user.role !== "parent") {
    return res.status(403).json({ msg: "Access denied: Parent only" });
  }
  next();
};
