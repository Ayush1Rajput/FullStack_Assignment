const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Route to render a welcome page
app.get('/', (req, res) => {
    res.render('welcome'); // Renders 'views/welcome.ejs'
});




/////////////////////////////////////////////// Task-2/////////////////////////////////////


app.get('/greet/:name', (req, res) => {
    const userName = req.params.name;
    res.render('greet', { name: userName }); // Pass 'name' to EJS template
});


//////////////////////////////////////////////// Task-3 /////////////////////////////////////////////////

app.get('/products', (req, res) => {
    const products = ['Laptop', 'Phone', 'Tablet', 'Headphones'];
    res.render('products', { items: products }); // Pass array to EJS template
});








app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});