const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


////////////////////////////////////////////////////////////// Task-2 /////////////////////////////////////////////////////////////

app.set("view engine", "ejs");

app.get("/ejs", (req, res) => {
    res.render("index");
})


////////////////////////////////////////////////////////////// Task-3 /////////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.getElementById("changeTextBtn");
//     const heading = document.getElementById("heading");

//     button.addEventListener("click", function () {
//         heading.textContent = "You clicked the button!";
//     });
// });



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
