import { Router } from "express";
const router = Router();


router.route("/purchases").post(async (req, res) => {
 await res.send("hello janu");
});
router.route("/preview").get(async (req, res) => {
 await res.send("hello janu");
});

export default router;