const express = require('express');
const app = express();

app.use(express.json());

app.post('/query', (req, res) => {
    const { user, message, session_id } = req.body;
    
    res.json({
        reply_text: `Hello ${user}! I received your message: "${message}"`,
        intent: "test_connection",
        original_message: message
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});