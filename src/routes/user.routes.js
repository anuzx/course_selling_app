import { Router } from "express";
const router = Router();

router.route("/signUp").post(async (req,res)=> {
   await res.send("hello janu")
})
router.route("/signIn").post(async (req, res) => {
 await res.send("hello janu");
});
router.route("/purchases").post(async (req, res) => {
 await res.send("hello janu");
});

export default router;