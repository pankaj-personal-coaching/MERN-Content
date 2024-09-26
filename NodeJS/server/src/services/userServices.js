const bcrypt = require("bcrypt");
const User = require("../database/UserSchema");
const dbUtils = require("../utils/dbUtils");

exports.createUser = async (userBody) => {
  let {
    id,
    firstName,
    lastName,
    email,
    gender,
    createdDate,
    phone,
    password,
    username,
    role,
  } = userBody;
  let _password = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({
      id,
      firstName,
      lastName,
      email,
      gender,
      createdDate,
      phone,
      password: _password,
      username,
      role,
    });
    const user = await newUser.save();
    return user;
  } catch (err) {
    return err;
  }
};

exports.getUsers = async (queryParams) => {
  try {
    let query = dbUtils.generateQuery(queryParams);
    let users = [];
    if (query.length) {
      users = await User.aggregate(query);
    } else {
      users = await User.find();
    }
    return users;
  } catch (err) {
    return err;
  }
};
exports.getUserById = async (id) => {
  try {
    const user = await User.findOne(
      { id: Number(id) },
      { _id: 0, __v: 0, password: 0 }
    );
    if (!user) {
      return null;
    }
    return user;
  } catch (err) {
    return err;
  }
};
exports.updateUser = async (id, data) => {
  try {
    // To get the user which has to be updated.
    let user = await User.findOne({ id: Number(id) });
    if (!user) {
      return null;
    }
    // Update the user properties
    Object.keys(data).forEach((key) => {
      user[key] = data[key];
    });
    user = await user.save();
    return user;
  } catch (err) {
    return err;
  }
};
exports.deleteUser = async (id) => {
  try {
    // To get the user which has to be updated.
    let user = await User.findOneAndDelete({ id: Number(id) });
    if (!user) {
      return null;
    } else {
      return user;
    }
  } catch (err) {
    return err;
  }
};
