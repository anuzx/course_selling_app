import { Router } from "express";
const router = Router();


router.route("/signUp").post(async (req, res) => {
    await res.json({
    message:"hello"
});
});
router.route("/singIn").post(async (req, res) => {
  await res.send("hello janu");
});
router.route("/course").post(async (req, res) => {
 await res.send("hello janu");
});
router.route("/course/bulk").get(async (req, res) => {
await res.send("hello janu");
});

export default router;