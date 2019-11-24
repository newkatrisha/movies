 import firebase from 'firebase/app';
//  import database
 import 'firebase/firestore';
 import 'firebase/auth';
 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBj5WRbeyYr_nkPa0ErYGeNzh2GIj_lUJ0",
    authDomain: "movielist-31b40.firebaseapp.com",
    databaseURL: "https://movielist-31b40.firebaseio.com",
    projectId: "movielist-31b40",
    storageBucket: "movielist-31b40.appspot.com",
    messagingSenderId: "776890933060",
    appId: "1:776890933060:web:d1cd511b7ba968270a4111",
    measurementId: "G-XE9VGGT3Q3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;