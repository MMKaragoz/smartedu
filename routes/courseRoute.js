const express = require('express');
const courseControllers = require('../controllers/courseControllers');

const router = express.Router();

router.route('/').post(courseControllers.createCourse);

module.exports = router;
