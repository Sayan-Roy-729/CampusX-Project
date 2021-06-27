import { videoConstants } from '../actions/Constants';

const initialState = {
    videos: [],
    quizzes: [],
    task: {},
    interview: [], 
    furtherReading: [],
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
        case videoConstants.GET_VIDEO_CONTENTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case videoConstants.GET_VIDEO_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
                quizzes: action.quizzes,
                task: action.task,
                interview: action.interviewQuestion,
                furtherReading: action.furtherReading,
            };
        case videoConstants.GET_VIDEO_CONTENT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };
        case videoConstants.CHANGE_CONTENT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case videoConstants.CHANGE_CONTENT_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case videoConstants.CHANGE_CONTENT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };
        case videoConstants.CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                loading: false,
                errorMessage: null,
            };
        default:
            return state;
    }
};

export default videoReducer;