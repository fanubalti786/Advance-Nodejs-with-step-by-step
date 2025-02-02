import Router from "express";
import {loginUser, registerUser, logoutUser, refreshAccessToken} from "../controllers/user.js";
import upload from "../middlewares/multer.js";
import verifyJWT from "../middlewares/auth.js";
const router = Router();


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser);

router.route("/new-register").post((req,res)=>{
    res.status(200).send("hello")
})

router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/refresh-token").post(refreshAccessToken)




export default router;

