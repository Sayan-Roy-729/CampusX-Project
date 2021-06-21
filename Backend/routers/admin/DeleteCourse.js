const express = require('express');

const deleteControllers = require('../../controllers/admin/DeleteCourse');

const router = express.Router();

// /api/v1/ml/admin/video [DELETE]
router.delete('/admin/video', deleteControllers.deleteVideo);

// /api/v1/ml/admin/task [DELETE]
router.delete('/admin/task', deleteControllers.deleteTask);

// /api/v1/ml/admin/quiz [DELETE]
router.delete('/admin/quiz', deleteControllers.deleteQuiz);

// /api/v1/ml/admin/interview [DELETE]
router.delete('/admin/interview', deleteControllers.deleteInterview);

// /api/v1/ml/admin/further-reading [DELETE]
router.delete('/admin/further-reading', deleteControllers.deleteFurtherReading);

module.exports = router;