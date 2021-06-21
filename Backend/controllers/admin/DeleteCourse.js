const Video = require("../../models/Video");
const Quiz = require("../../models/Quiz");
const Task = require("../../models/Task");
const Interview = require("../../models/Interview");
const FurtherReading = require("../../models/FurtherReading");

// Delete a Video from the database
exports.deleteVideo = (req, res, next) => {
    const { videoId } = req.body;
    if (!videoId) {
        const error = new Error('Video id is required!');
        error.statusCode = 404;
        return next(error);
    }
    Video.destroy({ where: { id: videoId } })
        .then((result) => {
            console.log("Delete video result: ", result);
            if (result === 1) {
                res.status(200).json({
                    message:
                        "Video and the contents related to it is deleted successfully",
                });
            } else {
                res.status(404).json({ message: "Video not found. Try again" });
            }
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// Delete a Task from the database
exports.deleteTask = (req, res, next) => {
    const { taskId } = req.body;
    if (!taskId) {
        const error = new Error('Task id is required!');
        error.statusCode = 404;
        return next(error);
    }
    Task.destroy({ where: { id: taskId } })
        .then((result) => {
            if (result === 1) {
                res.status(200).json({message: 'Successfully deleted the task'});
            } else {
                res.status(404).json({message: 'Task is not found. Try again'});
            }
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// Delete a Quiz from the database
exports.deleteQuiz = (req, res, next) => {
    const { quizId } = req.body;
    if (!quizId) {
        const error = new Error('The id of the quiz is required!');
        error.statusCode = 404;
        return next(error);
    }
    Quiz.destroy({ where: { id: quizId } })
        .then((result) => {
            if (result === 1) {
                res.status(200).json({message: 'Successfully deleted the quiz'});
            } else {
                res.status(404).json({message: 'Quiz is not found. Try again'});
            }
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// Delete an interview from the database
exports.deleteInterview = (req, res, next) => {
    const { interviewId } = req.body;
    if (!interviewId) {
        const error = new Error('The id of the interview is required!');
        error.statusCode = 404;
        return next(error);
    }
    Interview.destroy({ where: { id: interviewId } })
        .then((result) => {
            if (result === 1) {
                res.status(200).json({message: 'Successfully deleted the interview'});
            } else {
                res.status(404).json({message: 'Interview is not found. Try again'});
            }
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};

// Delete an interview from the database
exports.deleteFurtherReading= (req, res, next) => {
    const { furtherReadingId } = req.body;
    if (!furtherReadingId) {
        const error = new Error('Further reading content id is required!');
        error.statusCode = 404;
        return next(error);
    }
    FurtherReading.destroy({ where: { id: furtherReadingId } })
        .then((result) => {
            if (result === 1) {
                res.status(200).json({message: 'Successfully deleted the further reading content'});
            } else {
                res.status(404).json({message: 'Further reading content is not found. Try again'});
            }
        })
        .catch((error) => {
            if (!error.statusCode) {
                error.statusCode = 500;
            }
            next(error);
        });
};
