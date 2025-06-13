const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const loginRoutes = require("../../routes/login");
const registerRoutes = require("../../routes/register");

const app = express();
app.use(cors());
app.use(express.json());

// Mount the routes
app.use("/api", loginRoutes);
app.use("/api", registerRoutes);

// Export the handler for Netlify Functions
module.exports.handler = serverless(app);
