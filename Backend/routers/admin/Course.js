const express = require('express');

const courseController = require('../../controllers/admin/CourseControllers');
const { contentUpload } = require('../../controllers/admin/contentUploadController');

const router = express.Router();

// api/v1/ml/admin/video [POST]
router.post('/admin/video', courseController.postNewVideoUpload);

router.post('/admin/upload', contentUpload);

// api/v1/ml/admin/quiz [POST]
router.post('/admin/quiz', courseController.postQuizUpload);

// api/v1/ml/admin/task [POST]
router.post('/admin/task', courseController.postTaskUpload);

// api/v1/ml/admin/interview [POST]
router.post('/admin/interview', courseController.postInterviewUpload);

// api/v1/ml/admin/further-reading [POST]
router.post('/admin/further-reading', courseController.postFurtherReadingUpload);

module.exports = router;