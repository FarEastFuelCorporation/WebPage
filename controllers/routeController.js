// controllers/routeController.js

require('dotenv').config();

async function homeController(req, res) {
    try {
        const viewsData = {

        };
        res.render('sections/home', viewsData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function aboutController(req, res) {
    try {
        const viewsData = {

        };
        res.render('sections/about', viewsData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function facilitiesController(req, res) {
    try {
        const viewsData = {

        };
        res.render('sections/facilities', viewsData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function servicesController(req, res) {
    try {
        const viewsData = {

        };
        res.render('sections/services', viewsData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function permitsController(req, res) {
    try {
        const viewsData = {

        };
        res.render('sections/permits', viewsData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function contactController(req, res) {
    try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        console.log(apiKey)
        const viewsData = {
            apiKey
        };
        res.render('sections/contacts', viewsData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { 
    homeController,
    aboutController,
    facilitiesController,
    servicesController,
    permitsController,
    contactController,
};