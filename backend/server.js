const express = require("express");
const http = require("http");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");
const teacherRoutes = require("./routes/teacher");
const parentRoutes = require("./routes/parent");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);

connectDB();
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/parents", parentRoutes);
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
