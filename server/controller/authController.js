import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Password don't match" });

    const user = await User.findOne({ username });

    if (user) return res.status(400).json({ error: "User already in use" });

    const name = fullName.split("");
    let profilePic;
    if (name[1])
      profilePic =
        "https://avatar.iran.liara.run/username?username=" +
        name[0] +
        "+" +
        name[1];
    else
      profilePic = "https://avatar.iran.liara.run/username?username=" + name[0];

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      gender,
      picture: profilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        picture: newUser.picture,
      });
    } else {
      return res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup", error);
    res.status(500).json({ error: "authController- internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      const isPassword = await bcrypt.compare(password, user.password);

      if (!isPassword) {
        return res.status(400).json({ error: "Wrong Password" });
      } else {
        generateTokenAndSetCookie(user._id, res);
        res.status(201).json({
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          picture: user.picture,
        });
      }
    } else {
      return res.status(400).json({ error: "User not registered!" });
    }
  } catch (error) {
    console.log("Error in signup", error);
    res.status(500).json({ error: "authController- internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logout successfully!" });
  } catch (error) {
    console.log("Error in signup", error);
    res.status(500).json({ error: "authController- internal server error" });
  }
};
