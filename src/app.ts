import express from "express"
import dotenv from "dotenv";
import logRoutes from "./src/logRoute"

dotenv.config();

const app = express()
app.use(express.json())

app.use("/logs", logRoutes);

export default app;