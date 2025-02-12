const express = require("express");

const app = express();
const PORT = 3000;

const isAuthenticated = false;

const authMiddleware = (req, res, next) => {
    if (!isAuthenticated) {
        return res.status(401).send("Unauthorized");
    }
    next();
};


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/about", (req, res) => {
    res.send("This is a simple Express app that demonstrates routing.");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at: contact@example.com");
});


app.use("/dashboard", authMiddleware);
app.get("/dashboard", (req, res) => {
    res.send("Welcome to your dashboard");
});


app.use((req, res) => {
    res.status(404).send("404 Not Found - The URL does not exist.");
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
