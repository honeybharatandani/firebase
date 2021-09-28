import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhm9rYIF15N4qp1mHqb7JQiQL63LFtJfQ",
  authDomain: "contact-de602.firebaseapp.com",
  projectId: "contact-de602",
  storageBucket: "contact-de602.appspot.com",
  messagingSenderId: "527312215717",
  appId: "1:527312215717:web:8d36a125f2f45e641f774c",
});

var db = firebaseApp.firestore();

export { db };
