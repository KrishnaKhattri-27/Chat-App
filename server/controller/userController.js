import User from "../models/userModel.js";

const userController = async (req, res) => {
  try {
    const currentUser = req.user._id;
    const allUsers = await User.find().select("-password");

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in geting users", error);
    res.status(500).json({ error: "userController internal server error" });
  }
};

export default userController;
