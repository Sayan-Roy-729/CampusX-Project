import axios from "../../config/axios";
import { videoConstants } from "./Constants";

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
    return dispatch => {
        dispatch({
            type: videoConstants.GET_VIDEO_CONTENTS_LOADING,
        });
    };
};
