const express = require('express');
const path = require('path');
const fs = require('fs');  // Include the 'fs' module
const { SitemapStream, streamToPromise } = require('sitemap');  // Include the 'sitemap' module
const routes = require('./routes/route');

const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Include your routes
app.use(routes);

// Serve the dynamically generated sitemap
app.get('/sitemap.xml', (req, res) => {
    const baseURL = 'https://www.fareastfuel.com';

    // Define the URLs to be included in the sitemap
    const urls = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/facilities', changefreq: 'monthly', priority: 0.8 },
        { url: '/services', changefreq: 'monthly', priority: 0.8 },
        { url: '/permits', changefreq: 'monthly', priority: 0.8 },
        { url: '/contacts', changefreq: 'monthly', priority: 0.8 },
    ];

    // Create a sitemap stream
    const stream = new SitemapStream({ hostname: baseURL });

  // Add URLs to the stream
    urls.forEach(url => {
        stream.write(url);
    });

    // End the stream
    stream.end();

    // Convert the stream to a string
    streamToPromise(stream).then(xmlString => {
        res.header('Content-Type', 'application/xml');
        res.send(xmlString);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
