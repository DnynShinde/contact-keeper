const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Get auth token header
  const token = req.header("x-auth-token");

  // check if not token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorisation denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SCRT);

    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
