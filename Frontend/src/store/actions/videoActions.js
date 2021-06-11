import axios from "../../config/axios";
import { videoConstants } from "./Constants";

// Fetch all videos from the database
export const getVideos = () => {
    return (dispatch) => {
        dispatch({
            type: videoConstants.GET_ALL_VIDEOS_LOADING,
        });

        axios
            .get("/video")
            .then((response) => {
                dispatch({
                    type: videoConstants.GET_ALL_VIDEOS_SUCCESS,
                    videos: response.data.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: videoConstants.GET_ALL_VIDEOS_FAILURE,
                    error: err.message,
                });
            });
    };
};

export const videoContent = (videoId) => {
    return (dispatch) => {
        dispatch({
            type: videoConstants.GET_VIDEO_CONTENTS_LOADING,
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
