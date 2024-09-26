const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const auth = require("../middleware/authMiddleware");
const roleMiddelware = require("../middleware/roleMiddleware");

// The request will be routed through controller.
router.get("/", auth.authMiddleware, userController.getUsers);
// router.post("/", userController.createUser);
// router.put("/:id", auth.authMiddleware, userController.updateUser);
// router.get("/:id", auth.authMiddleware, userController.getUserById);
// router.delete("/:id", auth.authMiddleware, userController.deleteUser);

router.post("/", userController.createUser);
router.put("/:id", auth.authMiddleware, userController.updateUser);
router.get("/:id", auth.authMiddleware, userController.getUserById);
router.delete("/:id", auth.authMiddleware, userController.deleteUser);

module.exports = router;
