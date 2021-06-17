const Video = require("../models/Video");

// Get all the videos from the database
exports.getVideos = (req, res, next) => {
    Video.findAll()
        .then((videos) => {
            if (!videos) {
                const error = new Error("Videos not found");
                error.statusCode = 500;
                throw error;
            } else {
                res.status(200).json({ message: "Successful", data: videos });
            }
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

// Get the other contents (task, quizzes, interview question, further reading content) of a specific video
exports.getVideoContents = (req, res, next) => {
    const { videoId } = req.body;
    let loadedVideo;
    let loadedQuiz;
    let loadedTask;
    let loadedInterviewQuestion;
    let loadedFurtherReading;

    Video.findOne({ where: { id: videoId } })
        .then(video => {
            if (!video) {
                const error = new Error('Video not found. Check the video id and try again');
                error.statusCode = 403;
                throw error;
                return;
            } else {
                loadedVideo = video;
                return video.getQuizzes();
            }
        })
        .then(quiz => {
            loadedQuiz = quiz;
            return loadedVideo.getTask();
        })
        .then(task => {
            loadedTask = task;
            return loadedVideo.getInterviewQuestions();
        })
        .then(interviewQuestion => {
            loadedInterviewQuestion = interviewQuestion;
            return loadedVideo.getFurtherReadings();
        })
        .then(furtherReading => {
            loadedFurtherReading = furtherReading;
            res.status(200).json({
                message: 'Ok',
                quiz: loadedQuiz,
                task: loadedTask,
                interviewQuestion: loadedInterviewQuestion,
                furtherReading: loadedFurtherReading,
            });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
