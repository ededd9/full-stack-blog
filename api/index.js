import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { router as authRouter } from "./routes/auth.js";
import { router as userRouter } from "./routes/users.js";
import { router as postRouter } from "./routes/posts.js";
import { router as categoryRouter } from "./routes/categories.js";
import multer from "multer";

dotenv.config();
const app = express();
app.use(express.json());
const db = process.env.REACT_APP_MONGO_URL;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

app.listen("5000", () => {
  console.log("Backend is running.");
});
