const express = require("express");
const http = require("http");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/user");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);

connectDB();
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
