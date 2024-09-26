const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

// Create/Register, Login, Logout, Get, Update and Delete
router.post("/", userController.createUser);
router.get("/:id", authMiddleware, userController.getUser);
router.get("/", authMiddleware, userController.getUsers);
router.put("/:id", authMiddleware, userController.updateUser);
router.delete("/:id", authMiddleware, userController.deleteUser);

// auth users
router.post("/auth/login", userController.login);
router.get("/auth/logout", () => {});

module.exports = router;
