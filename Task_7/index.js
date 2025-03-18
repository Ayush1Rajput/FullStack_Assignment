const express = require('express');
const app = express();

// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// POST route to handle JSON and URL-encoded data
app.post('/submit', (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'No data provided' });
        }
        res.json({ message: 'Data received successfully', data: req.body });
    } catch (error) {
        res.status(400).json({ error: 'Invalid JSON data' });
    }
});

// Error handling middleware for malformed JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Malformed JSON' });
    }
    next();
});

app.listen(3030, () => {
    console.log(`Server running at http://localhost:${3030}`);
});
    