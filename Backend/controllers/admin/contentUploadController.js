const Video = require("../../models/Video");

exports.contentUpload = async (req, res, next) => {
    console.log('Body: ', req.body);
    
    const videoTitle = req.body.videoTitle;
    const videoUrl = req.body.videoUrl;

    if (!videoTitle || !videoUrl) {
        const error = new Error("Video title and i-frame url is required");
        error.statusCode = 404;
        next(error);
        return;
    }

    const quizQuestion = req.body.quizQuestion;
    const quizOption1 = req.body.quizOption1;
    const quizOption2 = req.body.quizOption2;
    const quizOption3 = req.body.quizOption3;
    const quizOption4 = req.body.quizOption4;
    const quizRightOption = req.body.quizRightOption;
    if (quizQuestion) {
        if (
            !quizOption1 ||
            !quizOption2 ||
            !quizOption3 ||
            !quizOption4 ||
            !quizRightOption
        ) {
            const error = new Error(
                "All 4 options and the right option are required"
            );
            error.statusCode = 404;
            next(error);
            return;
        }
    }
    const taskQuestion = req.body.taskQuestion;
    const taskSolution = req.body.taskSolution;

    if (taskQuestion && !taskSolution) {
        const error = new Error("Task solution is also required");
        error.statusCode = 404;
        next(error);
        return;
    }

    const interviewQuestion = req.body.interviewQuestion;
    const interviewAnswer = req.body.interviewAnswer;

    if (interviewQuestion && !interviewAnswer) {
        const error = new Error(
            "The answer of the interview question is required"
        );
        error.statusCode = 404;
        next(error);
        return;
    }

    const furtherReadingTitle = req.body.furtherReadingTitle;
    const furtherReadingUrl = req.body.furtherReadingUrl;

    if (furtherReadingTitle && !furtherReadingUrl) {
        const error = new Error("The url for the further reading is required.");
        error.statusCode = 404;
        next(error);
        return;
    }

    let uploadedVideo;
    let upLoadedQuiz;
    let uploadedTask;
    let uploadedInterviewQuestion;
    let uploadedFurtherReading;

    Video.create({
        url: videoUrl,
        title: videoTitle,
    })
        .then((video) => {
            console.log('Video uploaded successfully');
            uploadedVideo = video;
            return video;
        })
        .then(async (video) => {
            console.log('Quiz upload starting');
            if (quizQuestion) {
                upLoadedQuiz = await video.createQuiz({
                    question: quizQuestion,
                    option1: quizOption1,
                    option2: quizOption2,
                    option3: quizOption3,
                    option4: quizOption4,
                    right: quizRightOption,
                });
            }
            console.log('Uploaded quiz: ', upLoadedQuiz);
            return upLoadedQuiz;
        })
        .then(async (quiz) => {
            console.log('Task upload starting');
            if (taskQuestion) {
                uploadedTask = await uploadedVideo.createTask({
                    question: taskQuestion,
                    solution: taskSolution,
                });
            }
            console.log('Uploaded task: ', uploadedTask);
            return uploadedTask;
        })
        .then(async (task) => {
            console.log('task upload starting');
            if (interviewQuestion) {
                uploadedInterviewQuestion =
                    await uploadedVideo.createInterviewQuestion({
                        question: interviewQuestion,
                        answer: interviewAnswer,
                    });
            }
            console.log('Uploaded interview', uploadedInterviewQuestion);
            return uploadedInterviewQuestion;
        })
        .then(async (interviewQuestion) => {
            console.log('interview question upload starting');
            if (furtherReadingTitle) {
                uploadedFurtherReading = await uploadedVideo.createFurtherReading({
                    title: furtherReadingTitle,
                    url: furtherReadingUrl,
                });
            }
            console.log('Uploaded further reading: ', uploadedFurtherReading);
            return uploadedFurtherReading;
        })
        .then(async (furtherReading) => {
            console.log('sending request');
            res.status(201).json({
                message: "Uploaded successfully",
                data: {
                    video: uploadedVideo,
                    quiz: upLoadedQuiz,
                    task: uploadedTask,
                    interviewQuestion: uploadedInterviewQuestion,
                    furtherReading: uploadedFurtherReading,
                },
            });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
