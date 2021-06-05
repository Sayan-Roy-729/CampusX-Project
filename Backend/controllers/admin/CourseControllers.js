const Video = require("../../models/Video");
const Quiz = require("../../models/Quiz");
const Task = require("../../models/Task");
const Interview = require("../../models/Interview");
const FurtherReading = require("../../models/FurtherReading");

// UPLOAD or UPDATE a Video into the Database
exports.postNewVideoUpload = (req, res, next) => {
    const videoUrl = req.body.url;
    const { title, videoId } = req.body;

    if (!videoUrl || videoUrl.length <= 0) {
        const error = new Error("Video Url is required");
        error.statusCode = 404;
        next(error);
    } else if (!title || title.length <= 0) {
        const error = new Error("Video title is required");
        error.statusCode = 404;
        next(error);
    } else {
        // Update the video
        if (req.query.update === "1") {
            if (!videoId || videoId <= 0) {
                const error = new Error("Video id is required to update");
                error.statusCode = 404;
                next(error);
            } else {
                Video.update({ videoUrl, title }, { where: { id: videoId } })
                    .then((result) => {
                        if (result === 0) {
                            const error = new Error(
                                "Video is not found. Please check the video id."
                            );
                            error.statusCode = 404;
                            throw error;
                        } else {
                            res.status(200).json({
                                message: "Successfully updated",
                            });
                        }
                    })
                    .catch((err) => {
                        if (!err.statusCode) {
                            err.statusCode = 500;
                        }
                        next(err);
                    });
            }
        } else {
            // Upload the video into the database
            Video.create({
                url: videoUrl,
                title,
            })
                .then((result) => {
                    res.status(201).json({
                        message: "Video added successfully!",
                        data: result,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        }
    }
};

// UPLOAD or UPDATE Quiz to the specific Video
exports.postQuizUpload = (req, res, next) => {
    const {
        option1,
        option2,
        option3,
        option4,
        right,
        videoId,
        question,
        quizId,
    } = req.body;

    if (videoId <= 0 || !videoId) {
        const error = new Error("Video Id is required");
        error.statusCode = 404;
        next(error);
    } else if (!option1 || !option2 || !option3 || !option4) {
        const error = new Error("All 4 options are required");
        error.statusCode = 404;
        next(error);
    } else if (right <= 0) {
        const error = new Error("Right answer option number is required");
        error.statusCode = 404;
        next(error);
    } else if (!question || question === "") {
        const error = new Error("Question is required");
        error.statusCode = 404;
        next(error);
    } else {
        // Update the quiz
        if (req.query.update === "1") {
            if (!quizId || quizId <= 0) {
                const error = new Error("Quiz id is required to update");
                error.statusCode = 404;
                next(error);
            } else {
                Quiz.update(
                    { question, option1, option2, option3, option4, right },
                    { where: { id: quizId } }
                )
                    .then((result) => {
                        if (result[0] === 0) {
                            const error = new Error(
                                "Quiz is not updated. Please check the id of the quiz"
                            );
                            error.statusCode = 403;
                            throw error;
                        } else {
                            res.status(200).json({
                                message: "Successfully updated",
                            });
                        }
                    })
                    .catch((err) => {
                        if (!err.statusCode) {
                            err.statusCode = 500;
                        }
                        next(err);
                    });
            }
        } else {
            // Upload the quiz into the database
            Video.findOne({ where: { id: videoId } })
                .then((video) => {
                    if (!video) {
                        const error = new Error(
                            "The video is not found. Please try again with proper video id"
                        );
                        error.statusCode = 403;
                        throw error;
                    } else {
                        return video.createQuiz({
                            question,
                            option1,
                            option2,
                            option3,
                            option4,
                            right,
                        });
                    }
                })
                .then((quizData) => {
                    console.log(quizData);
                    res.status(201).json({
                        message: "Successfully uploaded the quiz",
                        data: quizData,
                    });
                })
                .catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        }
    }
};

// UPLOAD or UPDATE task to the specific video
exports.postTaskUpload = (req, res, next) => {
    const { question, solution, videoId, taskId } = req.body;

    if (videoId <= 0 || !videoId) {
        const error = new Error("Video Id is required");
        error.statusCode = 404;
        next(error);
    } else if (!question || question === "") {
        const error = new Error("Task question is required");
        error.statusCode = 404;
        next(error);
    } else if (!solution || solution === "") {
        const error = new Error("Task solution is required");
        error.statusCode = 404;
        next(error);
    } else {
        // Update the task
        if (req.query.update === "1") {
            if (!taskId || taskId <= 0) {
                const error = new Error("Task id is required to updated");
                error.statusCode = 404;
                next(error);
            } else {
                Task.update({ question, solution }, { where: { id: taskId } })
                    .then((result) => {
                        if (result[0] === 0) {
                            const error = new Error(
                                "Task is not updated. Please check the id of the quiz"
                            );
                            error.statusCode = 403;
                            throw error;
                        } else {
                            res.status(200).json({
                                message: "Successfully updated",
                            });
                        }
                    })
                    .catch((err) => {
                        if (!err.statusCode) {
                            err.statusCode = 500;
                        }
                        next(err);
                    });
            }
        } else {
            // Upload the task
            Video.findOne({ where: { id: videoId } })
                .then((video) => {
                    if (!video) {
                        const error = new Error(
                            "The video is not found. Please try again with proper video id"
                        );
                        error.statusCode = 403;
                        throw error;
                    } else {
                        return video.createTask({
                            question,
                            solution,
                        });
                    }
                })
                .then((task) => {
                    res.status(201).json({
                        message: "Task created successfully",
                        data: task,
                    });
                })
                .catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        }
    }
};

// UPLOAD or UPDATE interview question to the specific video
exports.postInterviewUpload = (req, res, next) => {
    const { videoId, question, answer, interviewId } = req.body;

    if (videoId <= 0 || !videoId) {
        const error = new Error("Video Id is required");
        error.statusCode = 404;
        next(error);
    } else if (!question || question === "") {
        const error = new Error("Interview question is required");
        error.statusCode = 404;
        next(error);
    } else if (!answer || answer === "") {
        const error = new Error("Interview question answer is required");
        error.statusCode = 404;
        next(error);
    } else {
        if (req.query.update === "1") {
            if (!interviewId || interviewId <= 0) {
                const error = new Error(
                    "Id of the interview is required to update"
                );
                error.statusCode = 404;
                next(error);
            } else {
                Interview.update(
                    { question, answer },
                    { where: { id: interviewId } }
                )
                    .then((result) => {
                        if (result[0] === 0) {
                            const error = new Error(
                                "Update failed. Please check the id of the quiz"
                            );
                            error.statusCode = 403;
                            throw error;
                        } else {
                            res.status(200).json({
                                message: "Successfully updated",
                            });
                        }
                    })
                    .catch((err) => {
                        if (!err.statusCode) {
                            err.statusCode = 500;
                        }
                        next(err);
                    });
            }
        } else {
            Video.findOne({ where: { id: videoId } })
                .then((video) => {
                    if (!video) {
                        const error = new Error(
                            "The video is not found. Please try again with proper video id"
                        );
                        error.statusCode = 403;
                        throw error;
                    } else {
                        return video.createInterviewQuestion({
                            question,
                            answer,
                        });
                    }
                })
                .then((result) => {
                    res.status(201).json({
                        message:
                            "Interview questions are uploaded successfully",
                        data: result,
                    });
                })
                .catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        }
    }
};

// Upload new further reading content to the specific video
exports.postFurtherReadingUpload = (req, res, next) => {
    const { title, url, videoId, furtherReadingId } = req.body;

    if (videoId <= 0 || !videoId) {
        const error = new Error("Video Id is required");
        error.statusCode = 404;
        next(error);
    } else {
        if (req.query.update === "1") {
            if (!furtherReadingId || furtherReadingId <= 0) {
                const error = new Error(
                    "Further reading id is required to update"
                );
                error.statusCode = 404;
                next(error);
            } else {
                FurtherReading.update(
                    { title, url },
                    { where: { id: furtherReadingId } }
                )
                    .then((result) => {
                        if (result[0] === 0) {
                            const error = new Error(
                                "Update failed. Please check the id of the quiz"
                            );
                            error.statusCode = 403;
                            throw error;
                        } else {
                            res.status(200).json({
                                message: "Successfully updated",
                            });
                        }
                    })
                    .catch((err) => {
                        if (!err.statusCode) {
                            err.statusCode = 500;
                        }
                        next(err);
                    });
            }
        } else {
            Video.findOne({ where: { id: videoId } })
                .then((video) => {
                    if (!video) {
                        const error = new Error(
                            "The video is not found. Please try again with proper video id"
                        );
                        error.statusCode = 403;
                        throw error;
                    } else {
                        return video.createFurtherReading({
                            title,
                            url,
                        });
                    }
                })
                .then((result) => {
                    res.status(201).json({
                        message:
                            "Interview questions are uploaded successfully",
                        data: result,
                    });
                })
                .catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
        }
    }
};
