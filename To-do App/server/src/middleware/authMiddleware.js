const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Token Required" });
  }
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send({ message: "Invalid Token!" });
    }
    req.user = user;
    next();
  });
};
