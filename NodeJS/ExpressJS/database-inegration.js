const express = require("express");
const mongoose = require("mongoose");

const PORT = 3001;
const DB_PORT = 27017;
const DB_HOST = "localhost";
const DB = "local";

// Schema for User:
// firstName, lastName, email, username, password, role, createdDate.
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

// Create a express app.
const app = express();

// Add Middlewares to parse json body.
app.use(express.json());

// Create mongoDB connection.
const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB}`;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error!", err);
  });

// Routes:
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the database integration app" });
});

// Add a Post to User
app.post("/users", async (req, res) => {
  let { firstName, lastName, email, password, username, role } = req.body;
  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      role,
      password,
      username,
    });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send({ message: "Server Error! User post" });
  }
});

// Get Users data
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ message: "Server Error! Users get" });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send({ message: "Server Error! User get" });
  }
});

// To update the record
app.put("/users/:id", async (req, res) => {
  const { ...rest } = req.body;
  try {
    // To get the user which has to be updated.
    const id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // Update the user properties
    Object.keys(rest).forEach((key) => {
      user[key] = rest[key];
    });
    user = await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send({ message: "Server Error! User update" });
  }
});

// To delete the record from DB
app.delete("/users/:id", async (req, res) => {
  try {
    // To get the user which has to be updated.
    const id = req.params.id;
    let user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).send({ message: "User not found" });
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send({ message: "Server Error! User delete" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
