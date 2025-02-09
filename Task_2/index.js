///////////////////////////////////////////////////////////////////// Task-1 ///////////////////////////////////////////////////////////////////////////////////


const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' });

    if (req.method === 'GET' && req.url === '/') {
        res.end('Welcome to the Homepage!');
    } else {
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



///////////////////////////////////////////////////////////////////// Task-2 ///////////////////////////////////////////////////////////////////////////////////


const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const newData = data + '\nThis line is adding for testing........ .';

    fs.writeFile('output.txt', newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File modified and saved successfully!');
    });
});



///////////////////////////////////////////////////////////////////// Task-3 ///////////////////////////////////////////////////////////////////////////////////



const path = require('path');

const directory = 'files';
const fileName = 'document.txt';

const filePath = path.join(__dirname, directory, fileName);
console.log('Full file path:', filePath);

const fileExtension = path.extname(filePath);
console.log('File extension:', fileExtension);
