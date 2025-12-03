import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(cors({
  origin:"http://localhost:5173"
}))
//middleware to parse json body
app.use(express.json())
//middleware for ratelimit
app.use(rateLimiter)


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
