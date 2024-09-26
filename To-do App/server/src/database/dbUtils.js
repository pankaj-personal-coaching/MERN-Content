const mongoose = require("mongoose");
const { DB, DB_PORT, DB_HOST } = process.env;

exports.createDbInstance = () => {
  const connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB}`;
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Databse Connected!");
    })
    .catch((error) => {
      console.error("Database connection got an error", error);
    });
};
exports.generateQuery = ({ searchTerm, role, page, limit, sort }) => {
  let pipeline = [];
  let sortCriteria = sort === "desc" ? -1 : 1;
  if (role) {
    pipeline.push({ $match: { role: role } });
  }
  if (searchTerm) {
    pipeline.push({
      $match: {
        $or: [
          { firstName: { $regex: searchTerm, $options: "i" } },
          { lastName: { $regex: searchTerm, $options: "i" } },
          { username: { $regex: searchTerm, $options: "i" } },
        ],
      },
    });
  }
  if (sort) {
    pipeline.push({ $sort: { firstName: sortCriteria } });
  }
  pipeline.push({ $project: { _id: 0, password: 0 } });
  if (page && limit) {
    pipeline.push({ $skip: (Number(page) - 1) * Number(limit) });
    pipeline.push({ $limit: Number(limit) });
  }
  return pipeline;
};

