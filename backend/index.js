import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define allowed origins for CORS
const allowedOrigins = [
  "https://inno24.vercel.app",         // Your Vercel deployment URL
  "https://stark-connect.netlify.app", // Any other frontend URLs you may have
  "https://stark-connect-seven.vercel.app"
];

// CORS options configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Allows cookies to be sent from this backend to frontend
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Root route to confirm server is running
app.get("/", (req, res) => {
  res.send("This is backend running on port 3000");
});

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Connect to database and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB(); // Ensure this function properly connects to your database
  console.log(`Server running at port ${PORT}`);
});
