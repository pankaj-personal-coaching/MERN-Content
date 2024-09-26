const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  id: String,
  description: String,
  userId: { type: String, required: true },
  completed: Boolean,
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

module.exports = mongoose.model("Task", TaskSchema);
