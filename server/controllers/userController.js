import { User } from "../models/userModel.js";
import { signToken } from "../functions/auth.js";
async function index(req, res) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    alert(err);
  }
}
async function show(req, res) {
  console.log(`Current User:
  ${req.user}`);
  try {
    const user = await User.findById(req.param.id);
    res.json(user);
  } catch (err) {
    alert(err);
  }
}
async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = signToken(user);
    res.json({ success: true, message: "User created with token", token });
  } catch (err) {
    res.json({ success: false, code: err.message });
  }
}
async function update(req, res) {
  try {
    const user = await User.findById(req.params.id);
    Object.assign(user, req.body);
    await user.save();
    res.json({ success: true, message: "User updated", user });
  } catch (err) {
    res.json({ success: false, code: err.message });
  }
}
async function destroy(req, res) {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.json({ success: true, message: "User Deleted", user });
  } catch (err) {
    res.json({ success: false, code: err.message });
  }
}
async function authenticate(req, res) {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !user.validPassword(req.body.password)) {
    return res.json({ success: false, message: "Invalid Login" });
  }
  const token = signToken(user);
  res.json({ success: true, message: "Token attached", token });
}
export { index, show, create, update, destroy, authenticate };
