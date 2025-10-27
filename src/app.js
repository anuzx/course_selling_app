import express from "express";
const app = express();

app.use(express.json({ limit: "16kb" })); //data that we will take from form

//data from url:
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//data from static files
app.use(express.static("public"));

//routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export { app };
