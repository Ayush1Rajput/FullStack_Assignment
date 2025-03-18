const express = require('express');
const app = express();
const port = 3000;

// Sample data (array of items)
const items = ['Laptop', 'Phone', 'Tablet', 'Headphones'];

////////////////////////////////////////////////////// Task-1 ////////////////////////////////////////


// GET route to return the list of items
app.get('/items', (req, res) => {
    res.json({ items });
});



////////////////////////////////////////////// Task-2 ////////////////////////////////////////////////////


app.use(express.json()); // Middleware to parse JSON body

// POST route to add a new item
app.post('/items', (req, res) => {
    const { item } = req.body; // Extract item from request body
    if (!item) {
        return res.status(400).json({ error: 'Item is required' });
    }
    items.push(item); // Add new item to the array
    res.status(201).json({ message: 'Item added successfully', items });
});



///////////////////////////////////////////// Task-3 ////////////////////////////////////


// Enhanced POST route with error handling
app.post('/items', (req, res) => {
    const { item } = req.body;
    if (!item || typeof item !== 'string' || item.trim() === '') {
        return res.status(400).json({ error: 'Invalid item: A non-empty string is required' });
    }
    items.push(item);
    res.status(201).json({ message: 'Item added successfully', items });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
