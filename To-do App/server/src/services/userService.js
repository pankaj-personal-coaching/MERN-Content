const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ShortUniqueId = require("short-unique-id");

const User = require("../database/schemas/user");
const { generateQuery } = require("../database/dbUtils");
const { JWT_SECRET } = process.env;

exports.login = async (username, password) => {
  const user = await User.findOne({ username }, { _id: 0, __v: 0 });
  if (!user) {
    return "NOT_FOUND";
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return "WRONG_PASSWORD";
  }
  const token = jwt.sign(
    { username, email: user.email, role: user.role, userId: user.id },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

exports.createUser = async (userBody) => {
  try {
    const shortId = new ShortUniqueId({ length: 10 });
    let password = await bcrypt.hash(userBody.password, 10);
    let newUser = new User({ ...userBody, password, id: shortId.rnd() });
    let user = newUser.save();
    return user;
  } catch (error) {
    throw error;
  }
};
exports.getUsers = async (queryParams) => {
  try {
    let query = generateQuery(queryParams);
    let users = [];
    if (query.length) {
      users = await User.aggregate(query);
    } else {
      users = User.find();
    }
    return users;
  } catch (error) {
    throw error;
  }
};
exports.getUser = async (id) => {
  try {
    let user = await User.findOne({ id }, { _id: 0, __v: 0, password: 0 });
    if (!user) return null;
    return user;
  } catch (error) {
    throw error;
  }
};
exports.updateUser = async (id, data) => {
  try {
    let user = await User.findOne({ id });
    if (!user) return null;
    Object.keys(data).forEach((key) => {
      user[key] = data[key];
    });
    user.updatedAt = Date.now();
    user = await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};
exports.deleteUser = async (id) => {
  try {
    let user = await User.findOneAndDelete({ id });
    if (!user) return null;
    return user;
  } catch (error) {
    throw error;
  }
};
