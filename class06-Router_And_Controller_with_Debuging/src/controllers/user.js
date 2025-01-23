import asyncHandler from "../utlis/asyncHandler";

const registerUser = asyncHandler((req,res) => 
{
    res.status(200).json({
        message: "ok"
    });
});


export default registerUser;