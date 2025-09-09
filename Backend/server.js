const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/login");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log(" Server chạy tại http://localhost:5000");
});
