const express = require('express');
const { getCourses, getCourse, createCourse } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourse);
router.post('/', createCourse);

module.exports = router;
