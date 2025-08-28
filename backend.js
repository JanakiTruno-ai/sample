// backend.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Health check (for Cloud Run)
app.get("/healthz", (req, res) => {
  res.status(200).send("✅ OK");
});

// ✅ Root endpoint
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Cloud Run!");
});

// ✅ Query endpoint (called by Teams bot)
app.post("/api/query", async (req, res) => {
  const { userQuery, conversationId } = req.body;

  console.log(JSON.stringify({
    severity: "INFO",
    message: "Incoming query",
    userQuery,
    conversationId
  }));

  // 👉 Stub: just echo back
  res.json({
    type: "text",
    content: `You asked: "${userQuery}". (Conversation: ${conversationId})`
  });
});

// ✅ Cloud Run requires this
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
