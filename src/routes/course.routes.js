import { Router } from "express";
import { userVerification } from "../middlewares/UserAuth.middleware.js";
import { previewCourse, purchaseByUser } from "../controllers/user.controllers.js";
const router = Router();

//post endpoint to purchase the course
router.route("/purchases").post(userVerification, purchaseByUser);

//all the courses that exist
//no need of authentication here
router.route("/preview").get(previewCourse);

export default router;