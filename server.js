require("dotenv").config();
const express = require("express"),
  connectDB = require("./database/Database"),
  cors = require("cors"),
  config = require("./configs/config");
const accountRoutes = require("./routes/account");
// const adminRoutes = require("./routes/adminRoutes");
const path = require("path");

connectDB();

const app = express();

app.use(express.json({ limit: "50mb" }));

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/account", accountRoutes);
// app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

// Run the server!
app.listen(config.serverPort, () =>
  console.log(`Server running on port ${PORT}`)
);
