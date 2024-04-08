import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(500)
        .json({ error: "Token not found, not a autorized user" });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);

    if (!decode) {
      return res.status(500).json({ error: "invalid token" });
    }

    const user =await User.findOne({ _id: decode.userID }).select("-password");

    if (!user) {
      return res.status(500).json({ error: "user not found" });
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in signup", error);
    res.status(500).json({ error: "protectRoutes- internal server error" });
  }
};

export default protectRoute;
