const express = require('express');

const courseControllers = require('../controllers/CourseControllers');

const router = express.Router();

// api/v1/ml/video
router.get('/video', courseControllers.getVideos);

// api/v1/ml/video-content
router.get('/video-content', courseControllers.getVideoContents);

module.exports = router;