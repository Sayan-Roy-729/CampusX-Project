import { authConstants } from '../actions/Constants';

const initialState = {
    user: null,
    errorMessage: null,
    loading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstants.GET_CURRENT_USER_SIGN_IN:
            return {
                ...state,
                user: action.user,
            };
        case authConstants.CLEAR_ERROR_MESSAGE_STATE:
            return {
                ...state,
                errorMessage: null,
            };
        case authConstants.USER_SIGN_OUT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case authConstants.USER_SIGN_OUT_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                user: null,
            };
        case authConstants.USER_SIGN_OUT_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        case authConstants.USER_GOOGLE_SIGN_IN_LOADING:
            return {
                ...state,
                loading: true,
            };
        case authConstants.USER_GOOGLE_SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload.user,
            };
        case authConstants.USER_GOOGLE_SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default authReducer;