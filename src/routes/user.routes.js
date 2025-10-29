import { Router } from "express";
const router = Router();
import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import { signinUser, signupUser } from "../controllers/user.controllers.js";

router.route("/signup").post(signupUser)
router.route("/signin").post(signinUser);
router.route("/purchases").post(async (req, res) => {
  await res.send("hello janu");
});

export default router;
