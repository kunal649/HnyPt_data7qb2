const express = require('express');
const fs = require('fs');
const path = require('path');
const http = require('http');
const app = express();

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
app.use(express.static('public'));

app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, '..', 'data', 'data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file');
        }
        res.send(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
