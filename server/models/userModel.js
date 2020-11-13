import mongoose from "mongoose";
import bcpyrt from "bcryptjs";
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  longitude: { type: Number },
  latitude: { type: Number },
});
userSchema.methods.generateHash = function (password) {
  return bcpyrt.hashSync(password, bcpyrt.genSaltSync());
};
userSchema.methods.validPassword = function (password) {
  return bcpyrt.compare(password, this.password);
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    this.password = this.generateHash(this.password);
  }
  next();
});
const User = mongoose.model("user", userSchema);
export { User };
