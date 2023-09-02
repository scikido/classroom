import { Router } from "express";

const router = Router();

router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  res.status(200).send(username + " " + password);
});

export { router as userRouter };
