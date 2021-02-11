import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

  // database for logins and stored data 
  const firebaseConfig = {
    apiKey: "AIzaSyCr_toOQjKevruJxkHtDxD8KubKVEHEAmQ",
    authDomain: "swipe-tile-you-like.firebaseapp.com",
    databaseURL: "https://swipe-tile-you-like.firebaseio.com",
    projectId: "swipe-tile-you-like",
    storageBucket: "swipe-tile-you-like.appspot.com",
    messagingSenderId: "367612086633",
    appId: "1:367612086633:web:eddcbff1245e6427bb95f8",
    measurementId: "G-HCMM85W83Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth = firebase.auth();
  export const db = firebase.firestore();

  export default firebase