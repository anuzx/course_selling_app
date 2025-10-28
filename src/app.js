import express from "express";
const app = express();


app.use(express.json({ limit: "16kb" })); //data that we will take from form

//data from url:
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//data from static files
app.use(express.static("public"));

//routes
import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js";
import adminRouter from "./routes/admin.routes.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/admin", adminRouter);

export { app };
