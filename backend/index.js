import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
