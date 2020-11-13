import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAoYZCmsqoJFIkRW4lHgUnd6nLMhuzPYgE",
    authDomain: "myspace-1a330.firebaseapp.com",
    databaseURL: "https://myspace-1a330.firebaseio.com",
    projectId: "myspace-1a330",
    storageBucket: "myspace-1a330.appspot.com",
    messagingSenderId: "147980007653",
    appId: "1:147980007653:web:f2ca3c2976bc0fe2893c0c"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export { db }