import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userID,res)=>{
    const token= jwt.sign({userID},process.env.SECRET_KEY,{
        expiresIn:'15d'
    })   

    // console.log("autfile",token);

    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        domain:"https://chat-app-lyart-one.vercel.app",
        httpOnly: true,
        // sameSite: "none",
        secure: true // Set to true only if using HTTPS locally
    })
}

export default generateTokenAndSetCookie;