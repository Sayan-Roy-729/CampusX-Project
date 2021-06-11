import { videoConstants } from '../actions/Constants';

const initialState = {
    videos: [],
    loading: false,
    errorMessage: null,
};

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case videoConstants.GET_ALL_VIDEOS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case videoConstants.GET_ALL_VIDEOS_SUCCESS:
            return {
                ...state,
                loading: false,
                videos: action.videos,
            };
        case videoConstants.GET_ALL_VIDEOS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.error,
            };
        case videoConstants.UPLOAD_VIDEO_AND_CONTENT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case videoConstants.UPLOAD_VIDEO_AND_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case videoConstants.UPLOAD_VIDEO_AND_CONTENT_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default videoReducer;