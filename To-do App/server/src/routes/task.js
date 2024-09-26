const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
const { authMiddleware } = require("../middleware/authMiddleware");

// Create/Register, Login, Logout, Get, Update and Delete
router.post("/", authMiddleware, taskController.createTask);
router.get("/:id", authMiddleware, taskController.getTask);
router.get("/", authMiddleware, taskController.getTasks);
router.put("/:id", authMiddleware, taskController.updateTask);
router.delete("/:id", authMiddleware, taskController.deleteTask);

module.exports = router;
