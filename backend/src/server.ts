import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Siteique API is running 🚀",
  });
});

app.use("/api/inquiries", inquiryRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Siteique API running on port ${PORT}`);
});