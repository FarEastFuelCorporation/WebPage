const express = require('express');
const { homeController, aboutController, facilitiesController, servicesController, permitsController, contactController } = require('../controllers/routeController');
const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/facilities', facilitiesController);
router.get('/services', servicesController);
router.get('/permits', permitsController);
router.get('/contacts', contactController);

module.exports = router;