import { Router } from "express";
const router = Router();
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { signinUser, signupUser } from "../controllers/user.controllers.js";
import { userVerification } from "../middlewares/UserAuth.middleware.js";

router.route("/signup").post(signupUser)
router.route("/signin").post(signinUser);
//to see all their purchases
router.route("/purchases").post(userVerification,);

export default router;
