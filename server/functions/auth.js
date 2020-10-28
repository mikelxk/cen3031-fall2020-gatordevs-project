import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { secret } from "../config/config.js";
const jwt_secret = process.env.secret || secret;
function signToken(user) {
  const userData = user.toObject();
  delete userData.password;
  return jwt.sign(userData, jwt_secret);
}
function verifyToken(req, res, next) {
  const token = req.get("token") || req.body.token || req.query.token;
  if (!token) {
    return res.json({ success: false, message: "No token provided" });
  }
  jwt.verify(token, jwt_secret, (err, decodedData) => {
    if (err) {
      return res.json({ success: false, message: "Error with token" });
    }
    User.findById(decodedData._id, (err, user) => {
      if (!user) {
        return res.json({ success: false, message: "Error with token" });
      }
      req.user = user;
    });
  });
}
export { signToken, verifyToken };
