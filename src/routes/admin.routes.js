import { Router } from "express";
import {
  createCourseAdmin,
  getAllCourseAdmin,
  signinAdmin,
  signupAdmin,
  updateCourseAdmin,
} from "../controllers/admin.controllers";
import { adminVerification } from "../middlewares/adminAuth.middleware";
const router = Router();


router.route("/signup").post(signupAdmin);
router.route("/singin").post(signinAdmin);

//these routes will we accessed only after verification:

//creation of course 
router.route("/course").post(adminVerification, createCourseAdmin);
//updation of course
router.route("/course").put(adminVerification, updateCourseAdmin);
//to get all of your own courses (made by admin)
router.route("/course/bulk").get(adminVerification ,getAllCourseAdmin );

export default router;