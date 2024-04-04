import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    console.log(password);

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Password don't match" });

    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ error: "User already in use" });

    const profilePic =
      "https://avatar.iran.liara.run/username?username=Scott+Wilson";

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        picture: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup", error);
    res.status(500).json({ error: "internal server error" });
  }
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
