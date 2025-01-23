import asyncHandler from "../utlis/asyncHandler.js";

const registerUser = asyncHandler((req,res) => 
{
    res.status(200).json({
        message: "ok"
    });
});


export default registerUser;