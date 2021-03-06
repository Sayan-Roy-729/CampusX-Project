import axios from "../../config/axios";
import { videoConstants } from "./Constants";

// Fetch all videos from the database
export const getVideos = () => {
    return async (dispatch) => {
        dispatch({
            type: videoConstants.GET_ALL_VIDEOS_LOADING,
        });

        try {
            const response = await axios.get("/video");
            if (response.data) {
                dispatch({
                    type: videoConstants.GET_ALL_VIDEOS_SUCCESS,
                    videos: response.data.data,
                });
                return response.data.data;
            }
        } catch (error) {
            dispatch({
                type: videoConstants.GET_ALL_VIDEOS_FAILURE,
                error: error.message,
            });
        }

        // axios
        //     .get("/video")
        //     .then((response) => {
        //         dispatch({
        //             type: videoConstants.GET_ALL_VIDEOS_SUCCESS,
        //             videos: response.data.data,
        //         });
        //     })
        //     .catch((err) => {
        //         dispatch({
        //             type: videoConstants.GET_ALL_VIDEOS_FAILURE,
        //             error: err.message,
        //         });
        //     });
    };
};

// Fetch the contents of the video
export const videoContent = (videoId) => {
    return (dispatch) => {
        dispatch({
            type: videoConstants.GET_VIDEO_CONTENTS_LOADING,
        });

        axios
            .post("/video-content", { videoId })
            .then((response) => {
                const quizzes = response.data.quiz;
                const task = response.data.task;
                const interviewQuestion = response.data.interviewQuestion;
                const furtherReading = response.data.furtherReading;

                dispatch({
                    type: videoConstants.GET_VIDEO_CONTENT_SUCCESS,
                    quizzes,
                    task,
                    interviewQuestion,
                    furtherReading,
                });
            })
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: videoConstants.GET_VIDEO_CONTENT_FAILURE,
                    errorMessage: err.message,
                });
            });
    };
};

// Upload a video and the other contents related to the video
export const uploadContent = (formData) => {
    return async (dispatch) => {
        await dispatch({
            type: videoConstants.UPLOAD_VIDEO_AND_CONTENT_LOADING,
        });
        try {
            const response = await axios({
                method: "POST",
                url: "/admin/upload",
                headers: {
                    "content-type":
                        "application/x-www-form-urlencoded;charset=utf-8",
                },
                data: formData,
            });

            dispatch({
                type: videoConstants.UPLOAD_VIDEO_AND_CONTENT_SUCCESS,
                content: response.data,
            });
        } catch (error) {
            dispatch({
                type: videoConstants.UPLOAD_VIDEO_AND_CONTENT_FAILURE,
                errorMessage: error.message,
            });
        }
    };
};

// Update a task
export const updateTask = (taskData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        try {
            await axios.post("/admin/task?update=1", taskData);
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS});
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Upload a task
export const uploadTask = (taskData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        try {
            await axios.post("/admin/task", taskData);
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Upload a quiz
export const uploadQuiz = (quizData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });

        try {
            await axios.post("/admin/quiz", quizData);
            dispatch({
                type: videoConstants.CHANGE_CONTENT_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message,
            });
        }
    };
};

// Update a quiz
export const updateQuiz = (quizData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING});

        try {
            await axios.post("/admin/quiz?update=1", quizData);
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Upload a Interview
export const uploadInterview = (interviewData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING});

        try {
            await axios.post("/admin/interview", interviewData);
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message});
        }
    };
};

// Update a Interview
export const updateInterview = (interviewData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING});

        try {
            await axios.post("/admin/interview?update=1", interviewData);
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Upload a Further Reading
export const uploadFurtherReading = (furtherReadingData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });

        try {
            await axios.post("/admin/further-reading", furtherReadingData);
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Update a Interview
export const updateFurtherReading = (furtherReadingData) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });

        try {
            await axios.post(
                "/admin/further-reading?update=1",
                furtherReadingData
            );
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Delete video
export const deleteVideo = (videoId) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        try {
            // const response = await axios.delete('/admin/video', videoId);
            await axios({
                method: "DELETE",
                url: "/admin/video",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    videoId,
                },
            });
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message});
        }
    };
};

// Delete Task
export const deleteTask = (taskId) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        try {
            await axios({
                method: "DELETE",
                url: "/admin/task",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    taskId,
                },
            });
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

// Delete Quiz
export const deleteQuiz = (quizId) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        console.log('quiz id: ', quizId);
        axios({
            url: "/admin/quiz",
            method: "DELETE",
            data: {
                quizId: quizId
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                dispatch({type: videoConstants.CHANGE_CONTENT_SUCCESS})
            })
            .catch((error) => {
                console.log("Axios error: ", error);
                dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message});
            });
    };
};

// Delete Interview
export const deleteInterview = (interviewId) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        try {
            await axios({
                method: "DELETE",
                url: "/admin/interview",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    interviewId,
                },
            });
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS});
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message});
        }
    };
};

// Delete Further Reading
export const deleteFurtherReading = (furtherReadingId) => {
    return async (dispatch) => {
        dispatch({ type: videoConstants.CHANGE_CONTENT_LOADING });
        try {
            await axios({
                method: "DELETE",
                url: "/admin/further-reading",
                headers: {
                    "Content-Type": "application/json",
                },
                data: {
                    furtherReadingId,
                },
            });
            dispatch({ type: videoConstants.CHANGE_CONTENT_SUCCESS });
        } catch (error) {
            dispatch({ type: videoConstants.CHANGE_CONTENT_FAILURE, errorMessage: error.message });
        }
    };
};

export const clearErrorMessage = () => {
    return {
        type: videoConstants.CLEAR_ERROR_MESSAGE,
    };
};