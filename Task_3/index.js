////////////////////////////////////////////////////////// Task-1 ///////////////////////////////////////////////////////////////////

const fs = require('fs');

const filePath = 'file.txt';
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
        return;
    }
    console.log('File contents:\n', data);
});

////////////////////////////////////////////////////////// Task-2 ///////////////////////////////////////////////////////////////////



const outputPath = 'output.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
        return;
    }
    const modifiedData = data + '\n\nThis is the Added text.';

    fs.writeFile(outputPath, modifiedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err.message);
            return;
        }
        console.log('Updated content written to', outputPath);
    });
});


////////////////////////////////////////////////////////// Task-2 ///////////////////////////////////////////////////////////////////

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('Error: File does not exist.');
        } else if (err.code === 'EACCES') {
            console.error('Error: Permission denied.');
        } else {
            console.error('Error reading the file:', err.message);
        }
        return;
    }

    console.log('File read successfully.');

    // Modify the content
    const modifiedData = data + '\n\nThis is the appended text.';

    // Write the modified content to a new file with error handling
    fs.writeFile(outputPath, modifiedData, 'utf8', (err) => {
        if (err) {
            if (err.code === 'EACCES') {
                console.error('Error: No write permission for the file.');
            } else {
                console.error('Error writing to file:', err.message);
            }
            return;
        }
        console.log('Updated content written to', outputPath);
    });
});
