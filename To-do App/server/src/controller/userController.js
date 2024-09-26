const userService = require("../services/userService");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await userService.login(username, password);
    if (token === "NOT_FOUND") {
      res.status(404).send({ message: "The user is not found!" });
    } else if (token === "WRONG_PASSWORD") {
      res.status(401).send({ message: "Invalid Password!" });
    } else {
      res.status(200).send({ token });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! User login" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const userBody = req.body;
    const user = await userService.createUser(userBody);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! User creation" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const queryParams = req.query;
    const users = await userService.getUsers(queryParams);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! user list" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! get user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedUser = await userService.updateUser(id, data);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! update user" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await userService.deleteUser(id);
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! delete user" });
  }
};
