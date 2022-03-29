import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: "AIzaSyCIeBKl2SQU8xkN0smttZh4mlt7pB5TQzg",
  authDomain: "comment-it-dev.firebaseapp.com",
  projectId: "comment-it-dev",
  storageBucket: "comment-it-dev.appspot.com",
  messagingSenderId: "143548692544",
  appId: "1:143548692544:web:beb765c5623e9d29e407a5",
  measurementId: "G-N08SBQYV06",
});

export const auth = firebase.auth();
export default app;
