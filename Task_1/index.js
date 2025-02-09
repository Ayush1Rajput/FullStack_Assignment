///////////////////////////////////////////////////////////////////// Task-1 ///////////////////////////////////////////////////////////////////////////////////

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/home') {
        res.write('<h1>Welcome to the Home Page!</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>This is the About Page.</h1>');
    } else {
        res.write('<h1>Page not found</h1>');
    }
    res.end();
});

const port = 4040;
server.listen(port, () => {
    console.log("Task - 1");
    console.log(`Server running on port http://localhost:${port}`);
});

///////////////////////////////////////////////////////////////////// Task-2 ///////////////////////////////////////////////////////////////////////////////////
const fs = require('fs');

console.log("File reading in progress...");

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Content:", data);
});

console.log("Task - 2");
console.log("Other operations is continue while the file is being read ...");


///////////////////////////////////////////////////////////////////// Task-3 ///////////////////////////////////////////////////////////////////////////////////


// Answer 
/* 1- Node.js is great for real - time apps like chat because it uses a non - blocking, event - driven model.This means it can handle many connections at once without slowing down, making it perfect for instant messaging, live updates, and notifications.Libraries like socket.io make real - time communication even easier.
*/

/* 2- However, for data - heavy APIs that process thousands of records per second, Node.js may struggle if tasks require a lot of CPU power.Since it runs on a single thread, heavy computations can block other requests.While workarounds like worker threads or clustering exist, languages like Go or Rust might handle CPU - intensive tasks more efficiently.Node.js shines for fast I / O tasks but needs optimization for heavy processing.
*/