import express from "express"
import dotenv from "dotenv";
import route  from "./routes/logRoute.js"

dotenv.config();

const app = express()
app.use(express.json())

app.use("/logs", route);

export default app;
