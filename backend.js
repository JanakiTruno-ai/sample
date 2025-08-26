const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Enable JSON parsing and CORS
app.use(express.json());
app.use(cors());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Minimal query endpoint
app.post("/api/query", (req, res) => {
  const { userQuery, conversationId } = req.body;

  console.log(`[INFO] Received query from conversation ${conversationId}:`, userQuery);

  // For testing, just echo back
  res.json({
    type: "text",
    content: `Received your query: "${userQuery}". Backend is connected!`
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
