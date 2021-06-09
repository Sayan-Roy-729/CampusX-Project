import firebase from '../../config/firebase';
import { authConstants } from './Constants';

export const userResult = (user) => {
    return {
        type: authConstants.GET_CURRENT_USER_SIGN_IN,
        user: user,
    };
};

// Get the currently signed-in user
export const currentSignInUser = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(userResult(user));
            } else {
                dispatch(userResult(null));
            }
        });
    };
};

// SignOut User
export const userSignOut = () => {
    return (dispatch) => {
        dispatch({
            type: authConstants.USER_SIGN_OUT_LOADING,
        });

        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: authConstants.USER_SIGN_OUT_SUCCESSFUL,
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch({
                    type: authConstants.USER_SIGN_OUT_FAILURE,
                    payload: {
                        errorMessage,
                    },
                });
            });
    };
};

// ? Sign In with Google
export const googleSignIn = () => {
    return dispatch => {
        dispatch({
            type: authConstants.USER_GOOGLE_SIGN_IN_LOADING,
        });

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(result => {
            // const credential = result.credential;
            // const token = credential.accessToken;
            const user = result.user;

            dispatch({
                type: authConstants.USER_GOOGLE_SIGN_IN_SUCCESS,
                payload: {
                    user,
                },
            });
        }).catch(error => {
            const errorMessage = error.message;
            // const email = error.email;

            dispatch({
                type: authConstants.USER_GOOGLE_SIGN_IN_FAILURE,
                payload: {
                    errorMessage,
                }
            });
        });
    };
}