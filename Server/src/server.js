const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Stylinng ho jaaye thodii
app.use(express.static('public'));
    
//ye bhn ka loda data read krega
app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, '..', 'data', 'data.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file');
        }
        res.send(data);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
