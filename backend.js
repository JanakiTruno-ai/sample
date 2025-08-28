// backend.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ Backend is running on Cloud Run!");
});

// ✅ Query endpoint (what your Teams bot calls)
app.post("/api/query", async (req, res) => {
  const { userQuery, conversationId } = req.body;

  console.log("[DEBUG] Incoming query:", { userQuery, conversationId });

  // 👉 For now, just echo back the query
  res.json({
    type: "text",
    content: `You asked: "${userQuery}". (Conversation: ${conversationId})`
  });
});

// ✅ Cloud Run expects PORT from env
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
