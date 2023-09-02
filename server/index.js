import express from "express";
import { Router } from "express";
import { homeworkRouter } from "./routes/homework.js";
import { userRouter } from "./routes/user.js";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/homework", homeworkRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
