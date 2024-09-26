const userService = require("../services/userServices");

exports.getUsers = async (req, res) => {
  try {
    let queryParams = req.query;
    const users = await userService.getUsers(queryParams);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: "Server Error! User post" });
  }
};
exports.createUser = async (req, res) => {
  try {
    const userBody = req.body;
    const user = await userService.createUser(userBody);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: "Server Error! User post" });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: "Server Error! User post" });
  }
};
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const user = await userService.updateUser(id, data);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: "Server Error! User post" });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.deleteUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: "Server Error! User post" });
  }
};
