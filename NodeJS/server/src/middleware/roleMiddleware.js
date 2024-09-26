exports.checkManager = (req, res, next) => {
  let user = req.user;
  if (!user?.role || user.role !== "Project Manager") {
    return res.status(401).json({
      message: "The loggedin user is not authorized to access this API",
    });
  }
  next();
};
