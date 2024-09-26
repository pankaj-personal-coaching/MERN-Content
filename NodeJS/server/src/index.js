require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");
const User = require("./database/UserSchema");
const db = require("./database/db");

const { PORT, JWT_SECRET } = process.env;

const app = express();

app.use(express.json());

// Add middleware for handling CORS stuff.
app.use(cors());

db.createDbInstance();
// Routes:
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the node-app" });
});

app.post("/api/login", async (req, res) => {
  let { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).send({ message: "The user is not found!" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: "Invalid password" });
  }
  const token = jwt.sign(
    { username, email: user.email, role: user.role },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  res.status(200).json({ token });
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
