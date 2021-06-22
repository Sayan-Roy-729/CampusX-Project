import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyATmX942OZKUbEXldZ-4L-Mclrwq09Oaps',
    authDomain: 'learning-management-service7.firebaseapp.com',
    projectId: 'learning-management-service7',
    storageBucket: 'learning-management-service7.appspot.com',
    messagingSenderId: '132366244424',
    appId: '1:132366244424:web:4a65cf10063bd4b104967d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


export default firebase;