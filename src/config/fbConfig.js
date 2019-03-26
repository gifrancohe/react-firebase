  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAYlrSjA5_dC8-iFZc1Qh0bYSDewDXeY9w",
    authDomain: "react-firebase-344ca.firebaseapp.com",
    databaseURL: "https://react-firebase-344ca.firebaseio.com",
    projectId: "react-firebase-344ca",
    storageBucket: "",
    messagingSenderId: "900171567018"
  };
  
  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;