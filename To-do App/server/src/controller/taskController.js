const taskService = require("../services/taskService");

exports.createTask = async (req, res) => {
  try {
    const taskBody = req.body;
    const task = await taskService.createTask(taskBody);
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! create task" });
  }
};
exports.getTasks = async (req, res) => {
  try {
    const queryParams = req.query;
    const tasks = await taskService.getTasks(queryParams);
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! task list" });
  }
};
exports.getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await taskService.getTask(id);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! get task" });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedTask = await taskService.updateTask(id, data);
    res.status(200).send(updatedTask);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! update task" });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await taskService.deleteTask(id);
    res.status(200).send(deletedTask);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error! delete task" });
  }
};
