import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userID,res)=>{
    const token= jwt.sign({userID},process.env.SECRET_KEY,{
        expiresIn:'15d'
    })   

    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        domain:"https://chat-app-lyart-rho.vercel.app",
        httpOnly:false,
        sameSite:"none",
        secure:true
    })
}

export default generateTokenAndSetCookie;