require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");
const { createDbInstance } = require("./database/dbUtils");

const { PORT } = process.env;

const app = express();

// default middlewares
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("The server is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

createDbInstance();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
