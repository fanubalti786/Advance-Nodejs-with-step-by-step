import ApiError  from "../utlis/ApiError.js";
import asyncHandler  from "../utlis/asyncHandler.js";
import jwt from "jsonwebtoken"
import User  from "../models/user.js";

const verifyJWT = asyncHandler(async(req, _, next) => {
    try {

        console.log(req.cookies);
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
    
});

export default verifyJWT;