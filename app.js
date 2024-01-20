// app.js

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Include your routes
const routes = require('./routes/route');

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});