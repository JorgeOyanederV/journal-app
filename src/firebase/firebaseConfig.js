// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBH0VzX4KhHZ0s3uPuuaemJuE6Cp7VGuAE",
   authDomain: "react-app-test-14649.firebaseapp.com",
   projectId: "react-app-test-14649",
   storageBucket: "react-app-test-14649.appspot.com",
   messagingSenderId: "920270498431",
   appId: "1:920270498431:web:d3b4aaa6560eeb97726d4a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
   db,
   googleAuthProvider,
   firebase
}