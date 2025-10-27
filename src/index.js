import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

 app.listen(process.env.PORT || 8000, () =>
   console.log(`server is running at: ${process.env.PORT}`)
 );