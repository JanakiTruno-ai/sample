// backend.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

// POST route to handle messages from Teams frontend
app.post("/message", (req, res) => {
  const userMessage = req.body.text || req.body.message || "No message";
  console.log("User asked:", userMessage);

  // Always respond with fixed reply
  res.json({
    reply: "Hi Teams 👋, I'm working fine in Cloud Run ✅"
  });
});

// Health check (optional)
app.get("/", (req, res) => {
  res.send("Cloud Run backend is live ✅");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
