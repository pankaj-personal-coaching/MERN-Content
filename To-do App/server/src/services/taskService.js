const ShortUniqueId = require("short-unique-id");
const Task = require("../database/schemas/task");

exports.createTask = async (taskBody) => {
  try {
    let shortId = new ShortUniqueId({ length: 10 });
    let newTask = new Task({ ...taskBody, id: shortId.rnd() });
    let task = await newTask.save();
    return task;
  } catch (error) {
    return error;
  }
};
exports.getTasks = async ({ page, limit }) => {
  try {
    let tasks = [];
    if (page && limit) {
      tasks = await Task.find({})
        .skip(limit * (page - 1))
        .limit(limit);
    } else {
      tasks = await Task.find();
    }
    return tasks;
  } catch (error) {
    return error;
  }
};
exports.getTask = async (id) => {
  try {
    if (!id) return null;
    let task = await Task.findOne({ id });
    return task;
  } catch (error) {
    return error;
  }
};
exports.updateTask = async (id, data) => {
  try {
    let task = await Task.findOne({ id });
    if (!task) return null;
    Object.keys(data).forEach((key) => {
      task[key] = data[key];
    });
    task.updatedAt = Date.now();
    let updatedTask = await task.save();
    return updatedTask;
  } catch (error) {
    return error;
  }
};
exports.deleteTask = async (id) => {
  try {
    let task = await Task.findOneAndDelete({ id });
    if (!task) return null;
    return task;
  } catch (error) {
    return error;
  }
};
