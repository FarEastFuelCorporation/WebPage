// app.js

const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Set up a simple route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});